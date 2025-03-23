import type { SVGProps } from "react";

export function IconShare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        d="M19 13v10H1V5h10m3-4h9v9m-13 4L23 1z"
      ></path>
    </svg>
  );
}
