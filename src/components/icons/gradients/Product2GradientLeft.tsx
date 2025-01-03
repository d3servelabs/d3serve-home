import * as React from "react";
import type { SVGProps } from "react";
const SvgProduct2GradientLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={314}
    height={265}
    viewBox="0 0 314 265"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={313.333}
      height={425.6}
      transform="matrix(-1 0 0 1 313.334 -1)"
      fill="url(#paint0_radial_358_1944)"
    />
    <rect
      width={313.333}
      height={425.6}
      transform="matrix(-1 0 0 1 313.334 -1)"
      fill="url(#paint1_radial_358_1944)"
      style={{
        mixBlendMode: "color-dodge",
      }}
    />
    <defs>
      <radialGradient
        id="paint0_radial_358_1944"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(313.333 33.25) rotate(-157.825) scale(376.161 312.511)"
      >
        <stop stopColor="#E34800" stopOpacity={0.64} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint1_radial_358_1944"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(305.01 54.1975) rotate(-152.31) scale(344.459 191.015)"
      >
        <stop stopColor="#FF8C01" stopOpacity={0.267} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgProduct2GradientLeft;
