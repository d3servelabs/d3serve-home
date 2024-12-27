import * as React from "react";
import type { SVGProps } from "react";
const SvgGithub = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 1.667A8.333 8.333 0 0 0 1.667 10c0 3.684 2.392 6.809 5.7 7.917.417.067.55-.192.55-.417v-1.408c-2.308.5-2.8-1.117-2.8-1.117-.383-.966-.925-1.225-.925-1.225-.758-.516.058-.5.058-.5.834.059 1.275.859 1.275.859.725 1.266 1.95.891 2.425.691.075-.541.292-.908.525-1.116-1.85-.209-3.791-.925-3.791-4.1 0-.925.316-1.667.858-2.259-.083-.208-.375-1.075.083-2.2 0 0 .7-.225 2.292.85A7.9 7.9 0 0 1 10 5.7c.709 0 1.425.092 2.084.275 1.591-1.075 2.291-.85 2.291-.85.459 1.125.167 1.992.084 2.2.541.592.858 1.334.858 2.259 0 3.183-1.95 3.883-3.808 4.091.3.259.575.767.575 1.542V17.5c0 .225.133.492.558.417C15.95 16.8 18.334 13.684 18.334 10A8.333 8.333 0 0 0 10 1.667"
    />
  </svg>
);
export default SvgGithub;
