// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const WarnIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      id="WarnIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
    >
      <g id="download-icn" transform="translate(0 0.087)">
        <path
          id="Unión_24"
          data-name="Unión 24"
          d="M19388-6740.606a107.642,107.642,0,0,0-107.52,107.52,107.642,107.642,0,0,0,107.52,107.52,107.642,107.642,0,0,0,107.52-107.52,107.642,107.642,0,0,0-107.52-107.52m0-20.48a128,128,0,0,1,128,128,128,128,0,0,1-128,128,128,128,0,0,1-128-128A128,128,0,0,1,19388-6761.087Z"
          transform="translate(-19260 6761)"
        />
      </g>
      <rect
        id="Rectángulo_893"
        data-name="Rectángulo 893"
        width="256"
        height="256"
        fill="none"
      />
      <path
        id="Trazado_7001"
        data-name="Trazado 7001"
        d="M43.3-140H12.1l3.6,91.9h24ZM27.8-35.5c-10.2,0-19.1,8.7-19.1,18.9A19.565,19.565,0,0,0,27.8,2.5c10.1,0,18.9-8.9,18.9-19.1A19.282,19.282,0,0,0,27.8-35.5Z"
        transform="translate(101 201)"
      />
    </svg>
  );
};

export default WarnIcon;
