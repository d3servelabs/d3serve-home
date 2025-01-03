"use client";

import {
  createContext,
  useMemo,
  ReactNode,
  useContext,
  useCallback,
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

export type TrackersProviderProps = {
  prefix?: string;
  suffix?: string;
  hasConsole?: boolean;
  hasAmplitudes?: boolean;
  hasGoogleAnalytics?: boolean;
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
  children,
}: Readonly<TrackersProviderProps>) {
  const { tracker } = useAmplitudes();

  const naming = useCallback(
    (name: string) => [prefix, name, suffix].filter(Boolean).join("_"),
    [prefix, suffix],
  );

  useClickTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useClickTracker", element, records);

      if (hasAmplitudes) await tracker(naming("CLICK"), records);

      if (hasGoogleAnalytics) event(naming("CLICK"), records);
    },
  );

  useFormTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useFormTracker", element, records);

      if (hasAmplitudes) await tracker(naming("FORM"), records);

      if (hasGoogleAnalytics) event(naming("FORM"), records);
    },
  );

  useViewportTracker(async (visible: boolean) => {
    if (hasConsole) console.log("useViewportTracker");

    if (hasAmplitudes) await tracker(naming("VIEWPORT"), { visible });

    if (hasGoogleAnalytics)
      event(naming("VIEWPORT"), {
        visible,
      });
  });

  useVitalsTracker(async (vitals: Record<string, Metric>) => {
    if (hasConsole) console.log("useVitalsTracker", vitals);

    if (hasAmplitudes) await tracker(naming("VITALS"), vitals);

    if (hasGoogleAnalytics) event(naming("VITALS"), vitals);
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
            typeof eventNames === "string" ? naming(eventNames) : eventNames,
            eventProperties,
            eventOptions,
          ),
          typeof eventNames === "string"
            ? event(naming(eventNames), eventProperties)
            : void 0,
        ]);
      },
    }),
    [hasConsole, tracker],
  );

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
