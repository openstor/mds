// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const DarkModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"min-icon"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g transform="translate(0 0)">
        <path
          d="M228.4,151.3c-54.3,14-109.7-18.6-123.7-73c-4.3-16.6-4.3-34.1,0-50.7L111.8,0L84.9,9.4C34,27.3,0,75.3,0,129.2
			C0,199.1,56.9,256,126.8,256h0.1c53.9-0.1,101.8-34.1,119.6-84.9l9.4-26.9L228.4,151.3z"
          fill={"currentcolor"}
        />
      </g>
    </g>
  </svg>
);

export default DarkModeIcon;
