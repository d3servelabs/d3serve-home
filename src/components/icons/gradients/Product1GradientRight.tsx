import * as React from "react";
import type { SVGProps } from "react";
const SvgProduct1GradientRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={640}
    height={265}
    viewBox="0 0 640 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={640}
      height={640}
      transform="translate(0 -68)"
      fill="url(#paint0_radial_358_2140)"
    />
    <rect
      width={640}
      height={640}
      transform="translate(0 -68)"
      fill="url(#paint1_radial_358_2140)"
      style={{
        mixBlendMode: "color-dodge",
      }}
    />
    <defs>
      <radialGradient
        id="paint0_radial_358_2140"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(640 50) rotate(-163.297) scale(742.842 486.065)"
      >
        <stop stopColor="#E34800" stopOpacity={0.64} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint1_radial_358_2140"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(623 81.5) rotate(-158.876) scale(667.881 302.593)"
      >
        <stop stopColor="#FF8C01" stopOpacity={0.267} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgProduct1GradientRight;
