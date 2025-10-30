// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const ServiceAccountsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 9.5"
    >
      <g transform="translate(231 719.516)">
        <path
          d="M-125.5,7.984a4.5,4.5,0,0,1,4.5-4.5,4.5,4.5,0,0,1,4.5,4.5Z"
          transform="translate(-105 -720)"
        />
        <rect width="10" height="1" transform="translate(-231 -711.016)" />
        <path
          d="M-119.5.484h-3v1h1v1h1v-1h1Z"
          transform="translate(-105 -720)"
        />
      </g>
    </svg>
  );
};

export default ServiceAccountsIcon;
