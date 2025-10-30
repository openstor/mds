// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ExpandLeftCaret = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 15 15"
    {...props}
  >
    <g id="OpenListIcon-full" transform="translate(4 4.984)">
      <g
        id="noun_chevron_2320228"
        transform="translate(0.167 4.016) rotate(-90)"
      >
        <path
          id="Trazado_6842"
          d="M5.3,1.7c0-0.1,0-0.2-0.1-0.3C5,1.2,4.8,1.2,4.6,1.3c0,0,0,0,0,0L1.9,4.2l-2.7-2.9
			c-0.1-0.2-0.4-0.2-0.5,0c0,0,0,0,0,0c-0.2,0.2-0.2,0.4,0,0.6l2.9,3.2c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1L5.1,2
			C5.2,1.9,5.3,1.8,5.3,1.7z"
        />
      </g>
      <rect
        id="Rectángulo_896"
        x="3.2"
        y="-1.4"
        fill={"none"}
        width="0.5"
        height="0.5"
      />
    </g>
  </svg>
);

export default ExpandLeftCaret;
