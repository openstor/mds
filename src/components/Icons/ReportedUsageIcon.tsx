// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ReportedUsageIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g data-name="Reported Usage" clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="Trazado 390"
        d="M128.003 0a128.151 128.151 0 0 0-128 128c0 70.573 57.424 127.995 128 127.995a128.147 128.147 0 0 0 128-127.995 128.15 128.15 0 0 0-128-128Zm0 223.078a95.188 95.188 0 0 1-95.085-95.075 95.191 95.191 0 0 1 95.085-95.084v95.084h95.075a95.184 95.184 0 0 1-95.075 95.074Z"
      />
      <path data-name="Rect\xE1ngulo 869" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default ReportedUsageIcon;
