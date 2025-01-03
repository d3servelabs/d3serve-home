"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  ReactNode,
} from "react";
import * as amplitude from "@amplitude/analytics-browser";
import { Experiment, ExperimentClient } from "@amplitude/experiment-js-client";
import {
  BrowserOptions,
  BaseEvent,
  EventOptions,
  Result,
} from "@amplitude/analytics-types";
import { resolve } from "@/utils/promise";
import { noop } from "@/utils/function";

interface Options extends BrowserOptions {
  globals?: boolean;
  retries?: number;
  delay?: number;
  queue?: number;
  debug?: boolean;
  onError?: (error: Error) => void;
  onSuccess?: () => void;
}

const OPTIONS: Options = {
  defaultTracking: { sessions: true },
  flushMaxRetries: 1,
  globals: true,
  retries: 1,
  delay: 1000,
  queue: 100,
  debug: false,
  onError: noop,
  onSuccess: noop,
};

type FN = (
  eventNames: string | BaseEvent,
  eventProperties?: Record<string, any>,
  eventOptions?: EventOptions,
) => Promise<{ ok: boolean; response: Result | null; error: Error | null }>;

const trackerWrapper: FN = async (eventName, eventProperties, eventOptions) => {
  const [response, error] = await resolve(
    () => amplitude.track(eventName, eventProperties, eventOptions).promise,
  );

  return {
    ok: !!(response?.code && response.code >= 200 && response.code < 300),
    response,
    error,
  };
};

const loggerWrapper: FN = async (eventName, eventProperties, eventOptions) => {
  const [response, error] = await resolve(
    () => amplitude.logEvent(eventName, eventProperties, eventOptions).promise,
  );

  return {
    ok: !!(response?.code && response.code >= 200 && response.code < 300),
    response,
    error,
  };
};

export interface AmplitudesProviderProps {
  children: ReactNode;
  key?: string;
  options?: Partial<Options>;
}

export interface IAmplitudesContext {
  key?: string;
  enabled?: boolean;
  tracker: FN;
  logger: FN;
  experiment?: ExperimentClient;
  setKey: (newKey: string) => void;
  setOptions: (newOptions: Partial<Options>) => void;
  identify: typeof amplitude.identify;
  revenue: typeof amplitude.revenue;
  flush: typeof amplitude.flush;
  setTransport: typeof amplitude.setTransport;
  setGroup: typeof amplitude.setGroup;
  setUserId: typeof amplitude.setUserId;
  setDeviceId: typeof amplitude.setDeviceId;
  setSessionId: typeof amplitude.setSessionId;
  getUserId: typeof amplitude.getUserId;
  getDeviceId: typeof amplitude.getDeviceId;
  getSessionId: typeof amplitude.getSessionId;
}

export const AmplitudesContext = createContext<IAmplitudesContext>({
  key: undefined,
  enabled: false,
  tracker: noop,
  logger: noop,
  setKey: noop,
  setOptions: noop,
  identify: noop,
  revenue: noop,
  flush: noop,
  setTransport: noop,
  setGroup: noop,
  setUserId: noop,
  setDeviceId: noop,
  setSessionId: noop,
  getUserId: noop,
  getDeviceId: noop,
  getSessionId: noop,
});

export function AmplitudesProvider({
  children,
  key: initialKey,
  options: initialOptions,
}: Readonly<AmplitudesProviderProps>) {
  const [key, setKey] = useState(
    initialKey ??
      process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY ??
      process.env.REACT_APP_AMPLITUDE_API_KEY,
  );
  const [options, setOptions] = useState<Options>({
    ...OPTIONS,
    ...initialOptions,
  });
  const [enabled, setEnabled] = useState(false);
  const [experiment, setExperiment] = useState<ExperimentClient | undefined>();

  const initialize = useCallback(async () => {
    if (!key) {
      const message = `Missing API key`;
      console.warn(`[AMPLITUDES]: ${message}.`);
      setEnabled(false);
      options.onError?.(new Error(message));
      return;
    }

    try {
      amplitude.reset();
      await amplitude.init(key, options).promise;
      amplitude.identify(new amplitude.Identify().set("premium", true));
      const experiment = Experiment.initializeWithAmplitudeAnalytics(
        "DEPLOYMENT_KEY",
        {
          retryFetchOnFailure: false,
        },
      );
      setExperiment(experiment);
      amplitude.setOptOut(false);
      setEnabled(true);
      console.info(`[AMPLITUDES]: Initialized successfully.`);
      options.onSuccess?.();
    } catch (error) {
      amplitude.setOptOut(true);
      setEnabled(false);
      console.error(`[AMPLITUDES]: Initialization failed.`, error);
      options.onError?.(error as Error);
    }
  }, [key, options]);

  const createEventHandler = useCallback(
    (fn: FN, label: string) =>
      async (
        eventName: string | BaseEvent,
        eventProperties?: Record<string, any>,
        eventOptions?: EventOptions,
      ) => {
        if (options.debug) {
          console.log(`[AMPLITUDES]: ${label} event request`, {
            eventName,
            eventProperties,
            eventOptions,
          });
        }

        if (enabled) {
          const response = await fn(eventName, eventProperties, eventOptions);

          if (options.debug) {
            console.log(`[AMPLITUDES]: ${label} event response`, response);
          }

          return response;
        } else console.warn(`[AMPLITUDES]: ${label} event disabled.`);

        return Promise.resolve({ ok: false, response: null, error: null });
      },
    [enabled, options.debug],
  );

  const tracker = useMemo(
    () => createEventHandler(trackerWrapper, "Tracking"),
    [createEventHandler],
  );
  const logger = useMemo(
    () => createEventHandler(loggerWrapper, "Logging"),
    [createEventHandler],
  );

  const value = useMemo(
    () => ({
      key,
      enabled,
      tracker,
      logger,
      experiment,
      setKey,
      setOptions,
      identify: amplitude.identify,
      revenue: amplitude.revenue,
      flush: amplitude.flush,
      setTransport: amplitude.setTransport,
      setGroup: amplitude.setGroup,
      setUserId: amplitude.setUserId,
      setDeviceId: amplitude.setDeviceId,
      setSessionId: amplitude.setSessionId,
      getUserId: amplitude.getUserId,
      getDeviceId: amplitude.getDeviceId,
      getSessionId: amplitude.getSessionId,
    }),
    [key, enabled, tracker, logger, experiment],
  );

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <AmplitudesContext.Provider value={value}>
      {children}
    </AmplitudesContext.Provider>
  );
}

export const useAmplitudes = (): IAmplitudesContext => {
  const context = useContext(AmplitudesContext);
  if (!context) {
    throw new Error(
      `"useAmplitudes" must be used within an "AmplitudesProvider"`,
    );
  }
  return context;
};
