import React, { SVGProps } from "react";

const OtherIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
        <rect x="0" y="0" width="24" height="24" />
        <circle className={`fill-gray-500 group-hover:fill-primary-200 ${color}`} cx="5" cy="12" r="2" />
        <circle className={`fill-gray-500 group-hover:fill-primary-200 ${color}`} cx="12" cy="12" r="2" />
        <circle className={`fill-gray-500 group-hover:fill-primary-200 ${color}`} cx="19" cy="12" r="2" />
      </g>
    </svg>
  );
};

export default OtherIcon;
