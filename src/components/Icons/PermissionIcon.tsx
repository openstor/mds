// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const PermissionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="Uni\xF3n 36"
        d="m203.074 254.064-74.746-44.835-74.746 44.835a13.592 13.592 0 0 1-20.586-11.636V46.276A46.324 46.324 0 0 1 79.277 0h98.078a46.328 46.328 0 0 1 46.281 46.276v196.152a13.576 13.576 0 0 1-20.562 11.636Zm-67.778-72.319 61.176 36.71V46.276a19.133 19.133 0 0 0-19.113-19.133H79.277a19.148 19.148 0 0 0-19.113 19.133v172.179l61.16-36.71a13.569 13.569 0 0 1 13.969 0Z"
      />
      <path data-name="Rect\xE1ngulo 921" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default PermissionIcon;
