import React, { SVGProps } from "react";

const Comode = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
        <path
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          d="M5.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L5.5,11 C4.67157288,11 4,10.3284271 4,9.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M11,6 C10.4477153,6 10,6.44771525 10,7 C10,7.55228475 10.4477153,8 11,8 L13,8 C13.5522847,8 14,7.55228475 14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 Z"
          opacity="0.3"
        />
        <path
          className={`fill-gray-500 ${color} opacity-70`}
          d="M5.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M11,15 C10.4477153,15 10,15.4477153 10,16 C10,16.5522847 10.4477153,17 11,17 L13,17 C13.5522847,17 14,16.5522847 14,16 C14,15.4477153 13.5522847,15 13,15 L11,15 Z"
        />
      </g>
    </svg>
  );
};

export default Comode;
