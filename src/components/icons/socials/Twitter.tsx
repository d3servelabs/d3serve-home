import * as React from "react";
import type { SVGProps } from "react";
const SvgTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M14.192 3.392h2.237L11.543 8.99l5.748 7.618h-4.5l-3.527-4.62-4.031 4.62H2.994l5.225-5.99-5.511-7.225h4.615l3.183 4.222zm-.786 11.875h1.24l-8-10.604h-1.33z"
    />
  </svg>
);
export default SvgTwitter;
