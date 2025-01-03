"use client";

import { useEffect, useCallback } from "react";

export const useFormTracker = (
  callback: (
    element: HTMLFormElement,
    records: Record<string, string | number | string[]>,
  ) => void,
) => {
  const handle = useCallback(
    (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.tagName === "FORM") {
        callback(form, {
          interaction: event.type,
          formId: form.id || "No id",
          formName: form.name || "No name",
          formAction: form.action || "No action",
          formMethod: form.method || "No method",
        });
      }
    },
    [callback],
  );

  useEffect(() => {
    document.addEventListener("submit", handle);
    document.addEventListener("reset", handle);
    return () => {
      document.removeEventListener("submit", handle);
      document.removeEventListener("reset", handle);
    };
  }, [handle]);
};
