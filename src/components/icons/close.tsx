import React, { SVGProps } from "react";

const CloseIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
        <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" className={`fill-gray-500 group-hover:fill-primary-100 ${color}`}>
            <rect x="0" y="7" width="16" height="2" rx="1"/>
            <rect opacity="0.3" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000) " x="0" y="7" width="16" height="2" rx="1"/>
        </g>
    </g>
    </svg>
  );
};

export default CloseIcon;
