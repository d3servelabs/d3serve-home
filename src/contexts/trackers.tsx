import { createContext, useMemo, ReactNode } from "react";
import { Metric } from "web-vitals";
import { event } from "nextjs-google-analytics";
import { useClickTracker } from "@/hooks/trackers/useClickTracker";
import { useFormTracker } from "@/hooks/trackers/useFormTracker";
import { useVitalsTracker } from "@/hooks/trackers/useVitalsTracker";
import { useViewportTracker } from "@/hooks/trackers/useViewportTracker";
import { useAmplitudes } from "./amplitudes";

export type TrackersProviderProps = {
  hasConsole?: boolean;
  hasAmplitudes?: boolean;
  hasGoogleAnalytics?: boolean;
  children: ReactNode;
};

export type ITrackersContext = object;

export const TrackersContext = createContext<ITrackersContext>({});

export function TrackersProvider({
  hasConsole = true,
  hasAmplitudes = false,
  hasGoogleAnalytics = false,
  children,
}: Readonly<TrackersProviderProps>) {
  const value = useMemo((): ITrackersContext => ({}), []);

  const { tracker } = useAmplitudes();

  useClickTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useClickTracker", element, records);

      if (hasAmplitudes) await tracker("CLICK", records);

      if (hasGoogleAnalytics)
        event("CLICK", {
          ...records,
        });
    },
  );

  useFormTracker(
    async (
      element: HTMLElement,
      records: Record<string, string | number | string[]>,
    ) => {
      if (hasConsole) console.log("useFormTracker", element, records);

      if (hasAmplitudes) await tracker("FORM", records);

      if (hasGoogleAnalytics)
        event("FORM", {
          ...records,
        });
    },
  );

  useViewportTracker(async (visible: boolean) => {
    if (hasConsole) console.log("useViewportTracker");

    if (hasAmplitudes) await tracker("VIEWPORT", { visible });

    if (hasGoogleAnalytics)
      event("VIEWPORT", {
        visible,
      });
  });

  useVitalsTracker(async (vitals: Record<string, Metric>) => {
    if (hasConsole) console.log("useVitalsTracker", vitals);

    if (hasAmplitudes) await tracker("VITALS", vitals);

    if (hasGoogleAnalytics)
      event("VITALS", {
        ...vitals,
      });
  });

  return (
    <TrackersContext.Provider value={value}>
      {children}
    </TrackersContext.Provider>
  );
}
