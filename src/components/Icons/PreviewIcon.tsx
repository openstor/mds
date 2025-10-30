// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const PreviewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    version="1.1"
    id="Layer_1"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <defs>
        <rect id="SVGID_1_" x="2.6" y="47.4" width="250.4" height="161.2" />
      </defs>
      <g>
        <path
          d="M127.8,95.5c-18,0-32.5,14.6-32.5,32.5c0,18,14.6,32.5,32.5,32.5l0,0
			c18,0,32.5-14.6,32.5-32.5C160.3,110,145.8,95.5,127.8,95.5"
          fill={"currentcolor"}
        />
        <path
          d="M248.2,112C204.1,45.5,114.5,27.4,48,71.4C31.9,82.1,18.1,95.9,7.5,112
			c-6.5,9.7-6.5,22.3,0,32c44.1,66.5,133.7,84.6,200.1,40.5c16.1-10.7,29.9-24.5,40.5-40.5C254.6,134.3,254.6,121.7,248.2,112
			 M127.8,181.2c-29.4,0-53.2-23.8-53.2-53.2s23.8-53.2,53.2-53.2S181,98.6,181,128l0,0C181,157.4,157.2,181.2,127.8,181.2"
          fill={"currentcolor"}
        />
      </g>
    </g>
  </svg>
);

export default PreviewIcon;
