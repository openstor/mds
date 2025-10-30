// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const OpenListIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <g data-name="OpenListIcon">
        <path
          data-name="Trazado 6842"
          d="M0 71.037a14.843 14.843 0 0 1 4.511-10.526 14.978 14.978 0 0 1 21.427 0l101.874 101.874 102.25-101.874a14.978 14.978 0 0 1 21.427 0 14.978 14.978 0 0 1 0 21.427L138.714 194.714a14.843 14.843 0 0 1-10.526 4.511 13.65 13.65 0 0 1-10.526-4.511L4.887 81.938A15.229 15.229 0 0 1 0 71.037Z"
        />
        <path data-name="Rect\xE1ngulo 896" fill="none" d="M0 0h256v256H0z" />
      </g>
    </g>
  </svg>
);

export default OpenListIcon;
