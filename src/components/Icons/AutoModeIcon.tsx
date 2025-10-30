// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const AutoModeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"min-icon"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g id="a">
        <path
          d="M0,128C0.1,57.3,57.3,0.1,128,0c70.6,0,128,57.4,128,128c-0.1,70.7-57.3,127.9-128,128C57.4,256,0,198.6,0,128z M30.8,128
			c0,53.7,43.5,97.2,97.2,97.2s97.2-43.5,97.2-97.2S181.7,30.8,128,30.8c0,0,0,0,0,0C74.3,30.8,30.8,74.3,30.8,128z M128,47.3
			c41.1,4.2,73.2,38.5,73.2,80.7S169,204.4,128,208.7V47.3z"
          fill={"currentcolor"}
        />
      </g>
    </g>
  </svg>
);

export default AutoModeIcon;
