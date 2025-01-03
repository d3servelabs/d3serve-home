"use client";

import { onCLS, onTTFB, onLCP, onINP, onFCP, onFID, Metric } from "web-vitals";
import { useEffect, useState } from "react";

export const measure = (onPerfEntry: (metric: Metric) => void): void => {
  if (typeof window === "undefined") return;

  onCLS(onPerfEntry);
  onTTFB(onPerfEntry);
  onLCP(onPerfEntry);
  onINP(onPerfEntry);
  onFCP(onPerfEntry);
  onFID(onPerfEntry);
};

const defaults: Record<string, Metric> = {};

measure((metric: Metric) => Object.assign(defaults, { [metric.name]: metric }));

export const useVitalsTracker = (
  callback: (vitals: Record<string, Metric>) => void,
) => {
  const [vitals, setVitals] = useState<Record<string, Metric>>(defaults);

  useEffect(() => {
    measure((metric: Metric) => {
      setVitals((prev) => ({ ...prev, [metric.name]: metric }));
    });
  }, []);

  useEffect(() => {
    if (Object.keys(vitals).length > 0) callback(vitals);
  }, [callback, vitals]);

  return vitals;
};
