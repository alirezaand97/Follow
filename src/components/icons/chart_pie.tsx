import React, { SVGProps } from "react";

const ChartPie = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
      <g stroke="none" fill="none">
        <rect x="0" y="0" width="24" height="24" />
        <path
          d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
        />
        <path
          d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
        />
      </g>
    </svg>
  );
};

export default ChartPie;
