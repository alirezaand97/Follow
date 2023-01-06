import { SVGProps } from "react";

const AgahSign = ({ color, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42.671"
      height="42.527"
      viewBox="0 0 42.671 42.527"
      className={props.className}
    >
      <g data-name="Group 12673">
        <path
          data-name="Path 14177"
          d="M21.358 0a21.263 21.263 0 1 0 8 40.976 277.814 277.814 0 0 1-3.335-7.851 12.723 12.723 0 1 1 8.157-11.862h8.614A21.337 21.337 0 0 0 21.358 0z"
          transform="translate(-.122)"
        />
        <path
          data-name="Path 14178"
          d="m17.37 17.29 4.676 11.837a12.44 12.44 0 0 0 8.146-11.837z"
          transform="translate(3.854 3.986)"
          style={{ fill: "#1d59a4" }}
        />
      </g>
    </svg>
  );
};

export default AgahSign;
