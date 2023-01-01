import React, { SVGProps } from "react";

const UserIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
      <g stroke="none"  fill="none"    >
        <polygon points="0 0 24 0 24 24 0 24" />
        <path
          d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
          opacity="0.3"
        />
        <path
          d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
        />
      </g>
    </svg>
  );
};

export default UserIcon;
