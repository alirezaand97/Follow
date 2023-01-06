import React, { SVGProps } from "react";

const EditIcon = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
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
          d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
           
          transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
        />
        <rect
          className={`fill-gray-500 group-hover:fill-primary-200 ${color}`}
          opacity="0.3"
          x="5"
          y="20"
          width="15"
          height="2"
          rx="1"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
