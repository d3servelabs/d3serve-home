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

export const LINKS = {
  search: "https://www.namefi.io",
};

export const PRODUCTS = {
  NAMEFI: {
    title: "Namefi",
    description: "Namefi",
    url: "https://www.namefi.io",
  },
  D3CARDS: {
    title: "D3.cards",
    description: "D3.cards",
    url: "https://d3.cards",
  },
  D3CAF: {
    title: "D3CAF",
    description: "D3CAF",
    url: "https://d3caf.com",
  },
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
  links: LINKS,
  products: PRODUCTS,
};

export const HAS_CURSOR = false;
export const HAS_TOPPER = false;

export * from "./brands";
export * from "./events";
