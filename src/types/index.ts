import "react";

declare module "react" {
  interface CSSProperties {
    "--to-top-inner-color"?: string;
    "--to-top-outer-color"?: string;
  }
}
