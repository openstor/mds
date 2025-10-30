// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CollapseIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <g data-name="CollapseIcon">
        <path data-name="Rect\xE1ngulo 841" fill="none" d="M0 0h256v256H0z" />
        <path data-name="Rect\xE1ngulo 842" d="M0 46h256v28H0z" />
        <path data-name="Rect\xE1ngulo 843" d="M0 116h256v28H0z" />
        <path data-name="Rect\xE1ngulo 844" d="M0 186h256v28H0z" />
      </g>
    </g>
  </svg>
);

export default CollapseIcon;
