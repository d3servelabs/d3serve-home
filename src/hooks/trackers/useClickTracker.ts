import { useEffect, useCallback, useRef, useMemo } from "react";

const getElementPath = (element: HTMLElement): string[] => {
  const path: string[] = [];
  let currentElement: HTMLElement | null = element;
  while (currentElement && currentElement !== document.body) {
    let selector = currentElement.tagName.toLowerCase();
    if (currentElement.id) {
      selector += `#${currentElement.id}`;
    } else if (currentElement.className) {
      selector += `.${currentElement.className.split(/\s+/gi).join(".")}`;
    }
    path.unshift(selector);
    currentElement = currentElement.parentElement;
  }
  return path;
};

interface Options {
  enabled?: boolean;
  tags?: string[];
  attributes?: string[];
  debounce?: number;
  context?: boolean;
  coordinates?: boolean;
  path?: boolean;
}

export const useClickTracker = (
  callback: (
    element: HTMLElement,
    records: Record<string, string | number | string[]>,
  ) => void,
  defaults?: Options,
) => {
  const debouncer = useRef<NodeJS.Timeout | null>(null);

  const options = useMemo(
    () => ({
      ...{
        enabled: true,
        tags: ["a", "button", 'input[type="submit"]', 'input[type="button"]'],
        attributes: [],
        debounce: 300,
        context: true,
        coordinates: true,
        trackTimestamp: true,
        path: true,
      },
      ...defaults,
    }),
    [defaults],
  );

  const getElementDetails = useCallback(
    (element: HTMLElement, event: MouseEvent) => {
      const { attributes, coordinates, path } = options;

      const records: Record<string, string | number | string[]> = {
        elementId: element.id || "No id",
        elementTag: element.tagName.toLowerCase(),
        elementType: element.getAttribute("type") || "No type",
        elementName: element.getAttribute("name") || "No name",
        elementAction: element.getAttribute("action") || "No action",
        elementMethod: element.getAttribute("method") || "No method",
        elementText: element.textContent?.trim() || "No text",
        elementClass: element.className || "No class",
        elementHref: element.getAttribute("href") || "No href",
      };

      if (attributes.length) {
        for (const { name, value } of element.attributes) {
          if (attributes.some((attr) => name.startsWith(attr))) {
            records[name] = value;
          }
        }
      }

      if (coordinates) {
        records.clientX = event.clientX;
        records.clientY = event.clientY;
        records.pageX = event.pageX;
        records.pageY = event.pageY;
      }

      if (path) {
        records.path = getElementPath(element);
      }

      return records;
    },
    [options],
  );

  const handle = useCallback(
    (event: MouseEvent) => {
      const { tags, context, debounce } = options;

      if (!context && event.button === 2) return;

      const target = event.target as HTMLElement;
      const closest = target.closest(tags.join(", ")) as HTMLElement | null;

      const element: HTMLElement | null = tags.includes(
        target.tagName.toLowerCase(),
      )
        ? target
        : closest && tags.includes(closest.tagName.toLowerCase())
          ? closest
          : null;

      if (element) {
        if (debouncer.current) {
          clearTimeout(debouncer.current);
        }

        debouncer.current = setTimeout(() => {
          callback(element, getElementDetails(element, event));
        }, debounce);
      }
    },
    [options, getElementDetails, callback],
  );

  useEffect(() => {
    if (!options.enabled) return;

    document.addEventListener("click", handle);
    if (options.context) {
      document.addEventListener("contextmenu", handle);
    }

    return () => {
      document.removeEventListener("click", handle);
      if (options.context) {
        document.removeEventListener("contextmenu", handle);
      }
      if (debouncer.current) {
        clearTimeout(debouncer.current);
      }
    };
  }, [options.enabled, options.context, handle]);
};
