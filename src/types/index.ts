import "react";

declare module "react" {
  interface CSSProperties {
    "--to-top-inner-color"?: string;
    "--to-top-outer-color"?: string;
  }
}

export enum SOCIALS {
  DISCORD = "DISCORD",
  TWITTER = "TWITTER",
  GITHUB = "GITHUB",
  TELEGRAM = "TELEGRAM",
  LINKEDIN = "LINKEDIN",
}

export enum CONTACTS {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}
