"use client";

import { useBreakPoint } from "./useBreakPoint";

type Type = "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const useBreakPoints = (): Record<Type, boolean> => {
  const records: Record<string, boolean> = {};

  records["2xs"] = useBreakPoint("2xs");
  records["xs"] = useBreakPoint("xs");
  records["sm"] = useBreakPoint("sm");
  records["md"] = useBreakPoint("md");
  records["lg"] = useBreakPoint("lg");
  records["xl"] = useBreakPoint("xl");
  records["2xl"] = useBreakPoint("2xl");

  return {
    ["2xs"]: records["2xs"],
    ["xs"]: records["2xs"] || records["xs"],
    ["sm"]: records["2xs"] || records["xs"] || records["sm"],
    ["md"]: records["2xs"] || records["xs"] || records["sm"] || records["md"],
    ["lg"]:
      records["2xs"] ||
      records["xs"] ||
      records["sm"] ||
      records["md"] ||
      records["lg"],
    ["xl"]:
      records["2xs"] ||
      records["xs"] ||
      records["sm"] ||
      records["md"] ||
      records["lg"] ||
      records["xl"],
    ["2xl"]:
      records["2xs"] ||
      records["xs"] ||
      records["sm"] ||
      records["md"] ||
      records["lg"] ||
      records["xl"] ||
      records["2xl"],
  };
};
