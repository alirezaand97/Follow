import React, { SVGProps } from "react";

const LibraryIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
          d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
        />
        <rect
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
          transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
          x="16.3255682"
          y="2.94551858"
          width="3"
          height="18"
          rx="1"
        />
      </g>
    </svg>
  );
};

export default LibraryIcon;
