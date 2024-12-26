import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1.707 2.793a1 1 0 0 0-1.414 1.414l4.586 4.586a3 3 0 0 0 4.242 0l4.586-4.586a1 1 0 0 0-1.414-1.414l-4.586 4.586a1 1 0 0 1-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMail;
