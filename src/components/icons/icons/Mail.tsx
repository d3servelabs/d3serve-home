import * as React from "react";
import type { SVGProps } from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H19C20.6569 20 22 18.6569 22 17V7C22 5.34315 20.6569 4 19 4H5ZM6.70711 6.79289C6.31658 6.40237 5.68342 6.40237 5.29289 6.79289C4.90237 7.18342 4.90237 7.81658 5.29289 8.20711L9.87868 12.7929C11.0503 13.9645 12.9497 13.9645 14.1213 12.7929L18.7071 8.20711C19.0976 7.81658 19.0976 7.18342 18.7071 6.79289C18.3166 6.40237 17.6834 6.40237 17.2929 6.79289L12.7071 11.3787C12.3166 11.7692 11.6834 11.7692 11.2929 11.3787L6.70711 6.79289Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMail;
