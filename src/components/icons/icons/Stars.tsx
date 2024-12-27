import * as React from "react";
import type { SVGProps } from "react";
const SvgStars = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.987 6.943c.333-.844 1.527-.844 1.86 0l.554 1.404a4 4 0 0 0 2.253 2.253l1.404.554c.844.333.844 1.527 0 1.86l-1.404.554a4 4 0 0 0-2.253 2.253l-.554 1.404c-.333.844-1.527.844-1.86 0l-.554-1.404a4 4 0 0 0-2.253-2.253l-1.404-.554c-.844-.333-.844-1.527 0-1.86L4.18 10.6a4 4 0 0 0 2.253-2.253zM14.119 2.43a.5.5 0 0 1 .93 0l.235.596a3 3 0 0 0 1.69 1.69l.597.236a.5.5 0 0 1 0 .93l-.597.235a3 3 0 0 0-1.69 1.69l-.235.597a.5.5 0 0 1-.93 0l-.236-.597a3 3 0 0 0-1.69-1.69l-.597-.235a.5.5 0 0 1 0-.93l.597-.236a3 3 0 0 0 1.69-1.69z"
    />
  </svg>
);
export default SvgStars;
