// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const WarnFilledIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="WarnFilledIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_987"
            data-name="Rectangle 987"
            width="12"
            height="12"
          />
        </clipPath>
      </defs>
      <g id="warning-icon-full" transform="translate(-0.002 -0.003)">
        <g
          id="Group_2356"
          data-name="Group 2356"
          transform="translate(0.002 0.003)"
          clipPath="url(#clip-path)"
        >
          <path
            id="Path_7081"
            data-name="Path 7081"
            d="M6,0H6a6,6,0,1,0,6,6A6,6,0,0,0,6,0m.964,1.947L6.751,7.434H5.318L5.1,1.947ZM6.04,10.454a1.134,1.134,0,1,1,0-2.269,1.134,1.134,0,0,1,0,2.269"
            transform="translate(-0.002 -0.003)"
          />
        </g>
      </g>
    </svg>
  );
};

export default WarnFilledIcon;
