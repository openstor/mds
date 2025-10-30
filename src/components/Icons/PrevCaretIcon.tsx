// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const NextCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(4 4.984)">
      <g transform="translate(0.167 4.016) rotate(-90)">
        <path
          d="M-245.7,184.1c0,4.2,1.6,8.3,4.5,11.4c5.1,5.9,14,6.4,19.9,1.3c0.5-0.4,0.9-0.9,1.3-1.3l100.9-108.9
			l101.3,108.7c5.1,5.9,14,6.4,19.9,1.3c0.5-0.4,0.9-0.9,1.3-1.3c5.9-6.5,5.9-16.4,0-22.8L-108.4,52.1c-2.6-3-6.4-4.7-10.4-4.8
			c-4-0.1-7.9,1.7-10.4,4.8l-111.7,120.3C-243.9,175.6-245.7,179.7-245.7,184.1z"
        />
      </g>
    </g>
  </svg>
);

export default NextCaretIcon;
