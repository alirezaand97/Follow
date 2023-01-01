import React, { SVGProps } from "react";

const HiddenIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
          d="M19.2078777,9.84836149 C20.3303823,11.0178941 21,12 21,12 C21,12 16.9090909,18 12,18 C11.6893441,18 11.3879033,17.9864845 11.0955026,17.9607365 L19.2078777,9.84836149 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
        />
        <path
          d="M14.5051465,6.49485351 L12,9 C10.3431458,9 9,10.3431458 9,12 L5.52661464,15.4733854 C3.75006453,13.8334911 3,12 3,12 C3,12 5.45454545,6 12,6 C12.8665422,6 13.7075911,6.18695134 14.5051465,6.49485351 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
        />
        <rect
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
          transform="translate(12.524621, 12.424621) rotate(-45.000000) translate(-12.524621, -12.424621) "
          x="3.02462111"
          y="11.4246212"
          width="19"
          height="2"
        />
      </g>
    </svg>
  );
};

export default HiddenIcon;
