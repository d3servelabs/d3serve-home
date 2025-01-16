"use client";

import {
  createContext,
  useMemo,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { Metric } from "web-vitals";
import { event } from "nextjs-google-analytics";
import { useClickTracker } from "@/hooks/trackers/useClickTracker";
import { useFormTracker } from "@/hooks/trackers/useFormTracker";
import { useVitalsTracker } from "@/hooks/trackers/useVitalsTracker";
import { useViewportTracker } from "@/hooks/trackers/useViewportTracker";
import { BaseEvent, EventOptions } from "@amplitude/analytics-types";
import { noop } from "@/utils/function";
import { useAmplitudes } from "@/contexts/amplitudes";
import _ from "lodash";
import { useUsercentrics } from "@/hooks/useUsercentrics";
import { UCUICMPEvent, UCUICMPEventType } from "@/types/UC_UI";

export type TrackersProviderProps = {
  prefix?: string;
  suffix?: string;
  hasConsole?: boolean;
  hasAmplitudes?: boolean;
  hasGoogleAnalytics?: boolean;
  format?: "kebab" | "snake" | "camel" | "pascal" | "constant";
  children: ReactNode;
};

export type ITrackersContext = {
  trackers: (
    eventNames: string | BaseEvent,
    eventProperties?: Record<string, any>,
    eventOptions?: EventOptions,
  ) => Promise<[{ ok: boolean; response: any; error: Error | null }, void]>;
};

export const TrackersContext = createContext<ITrackersContext>({
  trackers: noop,
});

export function TrackersProvider({
  prefix = "D3SERVE_HOME",
  suffix = "",
  hasConsole = true,
  hasAmplitudes = false,
  hasGoogleAnalytics = false,
  format = "kebab",
  children,
}: Readonly<TrackersProviderProps>) {
  const { tracker } = useAmplitudes();

  const naming = useCallback(
    (
      name: string,
      format?: "kebab" | "snake" | "camel" | "pascal" | "constant",
    ) => {
      const str = [prefix, name, suffix].filter(Boolean).join("_");

      switch (format) {
        case "kebab":
          return _.kebabCase(str);
        case "snake":
          return _.snakeCase(str);
        case "camel":
          return _.camelCase(str);
        case "pascal":
          return _.upperFirst(_.camelCase(str));
        case "constant":
          return _.upperCase(_.snakeCase(str));
        default:
          return str;
      }
    },
    [prefix, suffix],
  );

  useClickTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useClickTracker", element, records);

      if (hasAmplitudes) await tracker(naming("CLICK", format), records);

      if (hasGoogleAnalytics) event(naming("CLICK", format), records);
    },
  );

  useFormTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useFormTracker", element, records);

      if (hasAmplitudes) await tracker(naming("FORM", format), records);

      if (hasGoogleAnalytics) event(naming("FORM", format), records);
    },
  );

  useViewportTracker(async (visible: boolean) => {
    if (hasConsole) console.log("useViewportTracker");

    if (hasAmplitudes) await tracker(naming("VIEWPORT", format), { visible });

    if (hasGoogleAnalytics)
      event(naming("VIEWPORT", format), {
        visible,
      });
  });

  useVitalsTracker(async (vitals: Record<string, Metric>) => {
    if (hasConsole) console.log("useVitalsTracker", vitals);

    if (hasAmplitudes) await tracker(naming("VITALS", format), vitals);

    if (hasGoogleAnalytics) event(naming("VITALS", format), vitals);
  });

  const value = useMemo(
    (): ITrackersContext => ({
      trackers: async (
        eventNames: string | BaseEvent,
        eventProperties?: Record<string, any>,
        eventOptions?: EventOptions,
      ) => {
        if (hasConsole)
          console.log("useTrackers", eventNames, eventProperties, eventOptions);

        return Promise.all([
          tracker(
            typeof eventNames === "string"
              ? naming(eventNames, format)
              : eventNames,
            eventProperties,
            eventOptions,
          ),
          typeof eventNames === "string"
            ? event(naming(eventNames, format), eventProperties)
            : void 0,
        ]);
      },
    }),
    [format, hasConsole, naming, tracker],
  );

  const usercentrics = useUsercentrics(
    (name: UCUICMPEventType, event: UCUICMPEvent) => {
      console.log(`Usercentrics event "${name}"`, event);
    },
  );

  useEffect(() => {
    console.log("Usercentrics variables", usercentrics);
  }, [usercentrics]);

  return (
    <TrackersContext.Provider value={value}>
      {children}
    </TrackersContext.Provider>
  );
}

export const useTrackers = (): ITrackersContext => {
  const context = useContext(TrackersContext);
  if (!context) {
    throw new Error(`"useTrackers" must be used within an "TrackersProvider"`);
  }
  return context;
};
