import * as React from "react";
import type { SVGProps } from "react";
const SvgProduct1GradientLeft = (props: SVGProps<SVGSVGElement>) => (
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
      transform="translate(0 -308)"
      fill="url(#paint0_radial_358_2139)"
    />
    <rect
      width={640}
      height={640}
      transform="translate(0 -308)"
      fill="url(#paint1_radial_358_2139)"
      style={{
        mixBlendMode: "color-dodge",
      }}
    />
    <defs>
      <radialGradient
        id="paint0_radial_358_2139"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(11 598.5) rotate(29.5505) scale(678.912 406.993)"
      >
        <stop stopColor="#0061C9" stopOpacity={0.957} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint1_radial_358_2139"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-25.6 739.2) rotate(42.5707) scale(622.814 424.237)"
      >
        <stop stopColor="#007DEA" stopOpacity={0.969} />
        <stop offset={1} stopColor="#1C2024" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
);
export default SvgProduct1GradientLeft;
