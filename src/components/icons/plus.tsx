import React, { SVGProps } from "react";

const PlusIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
        xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      version="1.1"
      className={`w-6 ${props.className}`}
    >
        <g stroke="none"   fill="none"    >
        <rect className={`fill-gray-500 group-hover:fill-primary-200 ${color}`} x="4" y="11" width="16" height="2" rx="1"/>
        <rect className={`fill-gray-500 group-hover:fill-primary-200 ${color}`} opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-270.000000) translate(-12.000000, -12.000000) " x="4" y="11" width="16" height="2" rx="1"/>
    </g>
    </svg>
  );
};

export default PlusIcon;
