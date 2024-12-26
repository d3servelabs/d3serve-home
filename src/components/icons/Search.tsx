import * as React from "react";
import type { SVGProps } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.556 2.685a9 9 0 0 1 10.476 13.933l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 1 1 7.556 2.685M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSearch;
