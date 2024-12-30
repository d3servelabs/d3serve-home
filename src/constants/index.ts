import { env } from "../../env";

export const URL = env.NEXT_PUBLIC_VERCEL_URL
  ? env.NEXT_PUBLIC_VERCEL_URL
  : (env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000");

export const SOCIALS = {
  discord: "https://discord.namefi.gg",
  twitter: "https://twitter.com/d3serve",
  github: "https://github.com/d3servelabs",
  telegram: "https://t.me/t.me/namefidao",
  linkedin: "https://www.linkedin.com/company/98253007",
};

export const CONTACTS = {
  email: "zzn@d3serve.xyz",
  phone: "",
};

export const WEBSITE = {
  name: "D3Serve Labs",
  title: "D3Serve Labs",
  description: "D3Serve Labs",
  url: URL,
  icon: `${URL}/icon.png`,
  color: "#000000",
  keywords: [],
  socials: SOCIALS,
  contacts: CONTACTS,
};

export const HAS_CURSOR = false;
export const HAS_TOPPER = false;
