// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M126.32,0C56.55,0,0,56.55,0,126.32s56.55,126.32,126.32,126.32,126.32-56.55,126.32-126.32S196.08,0,126.32,0Zm13.11,197.19h-26.22V99.24h26.22v97.94Zm1.81-119.6c-.89,1.9-2.08,3.58-3.56,5.04-1.49,1.46-3.23,2.6-5.23,3.42-2,.82-4.13,1.23-6.41,1.23-2.15,0-4.2-.41-6.13-1.23-1.93-.82-3.63-1.96-5.08-3.42-1.46-1.46-2.61-3.14-3.47-5.04s-1.28-3.96-1.28-6.17,.43-4.29,1.28-6.22c.85-1.93,2.01-3.62,3.47-5.08s3.15-2.6,5.08-3.42c1.93-.82,3.97-1.24,6.13-1.24,2.28,0,4.42,.41,6.41,1.24,2,.82,3.74,1.96,5.23,3.42,1.49,1.46,2.67,3.15,3.56,5.08,.89,1.93,1.33,4.01,1.33,6.22s-.44,4.27-1.33,6.17Z" />
  </svg>
);

export default InfoIcon;
