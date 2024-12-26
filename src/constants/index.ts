import { env } from "../../env";

export const URL = env.NEXT_PUBLIC_VERCEL_URL
  ? env.NEXT_PUBLIC_VERCEL_URL
  : (env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000");

export const SOCIALS = {
  discord: "https://discord.com",
  twitter: "https://twitter.com",
  github: "https://github.com",
  telegram: "https://t.me",
  linkedin: "https://linkedin.com",
};

export const CONTACTS = {
  email: "a@b.com",
  phone: "+1234567890",
};

export const WEBSITE = {
  name: "Home",
  title: "Home",
  description: "Home",
  url: URL,
  icon: `${URL}/icon.png`,
  color: "#000000",
  keywords: [],
  socials: SOCIALS,
  contacts: CONTACTS,
};

export const HAS_CURSOR = false;
export const HAS_TOPPER = true;
