import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.65424 1.14645C5.8495 0.951184 6.16608 0.951184 6.36134 1.14645L10.8536 5.63866C10.9473 5.73243 11 5.8596 11 5.99221C11 6.12482 10.9473 6.25199 10.8536 6.34576L6.36134 10.838C6.16608 11.0332 5.8495 11.0332 5.65424 10.838C5.45898 10.6427 5.45898 10.3261 5.65424 10.1309L9.29289 6.49221H1.5C1.22386 6.49221 1 6.26835 1 5.99221C1 5.71607 1.22386 5.49221 1.5 5.49221H9.29289L5.65424 1.85355C5.45898 1.65829 5.45898 1.34171 5.65424 1.14645Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgArrowRight;
