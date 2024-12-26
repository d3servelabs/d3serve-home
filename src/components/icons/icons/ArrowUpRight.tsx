import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUpRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 8a1 1 0 0 1 0-2h10a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowUpRight;
