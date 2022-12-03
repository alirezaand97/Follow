import React, { SVGProps } from "react";

const FlowerIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
        <path
          d="M1.4152146,4.84010415 C11.1782334,10.3362599 14.7076452,16.4493804 12.0034499,23.1794656 C5.02500006,22.0396582 1.4955883,15.9265377 1.4152146,4.84010415 Z"
          className={`fill-gray-500 group-hover:fill-primary-100 ${color}`}
          opacity="0.3"
        />
        <path
          d="M22.5950046,4.84010415 C12.8319858,10.3362599 9.30257403,16.4493804 12.0067693,23.1794656 C18.9852192,22.0396582 22.5146309,15.9265377 22.5950046,4.84010415 Z"
          className={`fill-gray-500 group-hover:fill-primary-100 ${color}`}
          opacity="0.3"
        />
        <path
          d="M12.0002081,2 C6.29326368,11.6413199 6.29326368,18.7001435 12.0002081,23.1764706 C17.4738192,18.7001435 17.4738192,11.6413199 12.0002081,2 Z"
          className={`fill-gray-500 group-hover:fill-primary-100 ${color}`}
          opacity="0.3"
        />
      </g>
    </svg>
  );
};

export default FlowerIcon;
