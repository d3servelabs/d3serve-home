import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.654 1.146a.5.5 0 0 1 .707 0l4.493 4.493a.5.5 0 0 1 0 .707L6.36 10.838a.5.5 0 0 1-.707-.707l3.639-3.639H1.5a.5.5 0 0 1 0-1h7.793L5.654 1.854a.5.5 0 0 1 0-.708"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowRight;
