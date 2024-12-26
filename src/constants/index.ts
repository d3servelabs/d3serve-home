import { env } from "../../env";

export const URL = env.NEXT_PUBLIC_VERCEL_URL
  ? env.NEXT_PUBLIC_VERCEL_URL
  : (env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000");

export const WEBSITE = {
  name: "Home",
  title: "Home",
  description: "Home",
  url: URL,
  icon: `${URL}/icon.png`,
  color: "#000000",
  keywords: [],
};

export const HAS_CURSOR = false;
export const HAS_TOPPER = true;
