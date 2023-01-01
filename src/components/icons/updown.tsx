import React, { SVGProps } from "react";

const UpDownIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
        <polygon points="0 0 24 0 24 24 0 24" />
        <rect
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
          transform="translate(6.000000, 11.000000) rotate(-180.000000) translate(-6.000000, -11.000000) "
          x="5"
          y="5"
          width="2"
          height="12"
          rx="1"
        />
        <path
          d="M8.29289322,14.2928932 C8.68341751,13.9023689 9.31658249,13.9023689 9.70710678,14.2928932 C10.0976311,14.6834175 10.0976311,15.3165825 9.70710678,15.7071068 L6.70710678,18.7071068 C6.31658249,19.0976311 5.68341751,19.0976311 5.29289322,18.7071068 L2.29289322,15.7071068 C1.90236893,15.3165825 1.90236893,14.6834175 2.29289322,14.2928932 C2.68341751,13.9023689 3.31658249,13.9023689 3.70710678,14.2928932 L6,16.5857864 L8.29289322,14.2928932 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
        />
        <rect
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
          transform="translate(18.000000, 13.000000) scale(1, -1) rotate(-180.000000) translate(-18.000000, -13.000000) "
          x="17"
          y="7"
          width="2"
          height="12"
          rx="1"
        />
        <path
          d="M20.2928932,5.29289322 C20.6834175,4.90236893 21.3165825,4.90236893 21.7071068,5.29289322 C22.0976311,5.68341751 22.0976311,6.31658249 21.7071068,6.70710678 L18.7071068,9.70710678 C18.3165825,10.0976311 17.6834175,10.0976311 17.2928932,9.70710678 L14.2928932,6.70710678 C13.9023689,6.31658249 13.9023689,5.68341751 14.2928932,5.29289322 C14.6834175,4.90236893 15.3165825,4.90236893 15.7071068,5.29289322 L18,7.58578644 L20.2928932,5.29289322 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
          transform="translate(18.000000, 7.500000) scale(1, -1) translate(-18.000000, -7.500000) "
        />
      </g>
    </svg>
  );
};

export default UpDownIcon;
