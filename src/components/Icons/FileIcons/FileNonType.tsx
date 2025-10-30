// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const FileNonType = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g transform="translate(4891.5 -2436.5)">
        <path
          d="M188.186,256H14.5A14.5,14.5,0,0,1,0,241.5V14.5A14.5,14.5,0,0,1,14.5,0H128.635l.192.265L202.686,74.3V241.5a14.5,14.5,0,0,1-14.5,14.5Z"
          transform="translate(-4864.5 2436.5)"
          fill="#230b64"
        />
        <path
          d="M83.178,74.209H148L73.787,0V64.8a10.157,10.157,0,0,0,9.391,9.4"
          transform="translate(-4809.497 2436.5)"
          fill="#6a4db9"
        />
      </g>
    </g>
  </svg>
);

export default FileNonType;
