// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const LogsMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 12 12"
    {...props}
  >
    <defs>
      <clipPath id="clip-path-logs-menu">
        <rect
          id="Rectángulo_982"
          data-name="Rectángulo 982"
          width="12"
          height="12"
          transform="translate(0 0)"
        />
      </clipPath>
    </defs>
    <g id="logs-icon" transform="translate(-0.245 0.078)">
      <g
        id="Grupo_2346"
        data-name="Grupo 2346"
        transform="translate(0.245 -0.078)"
        clipPath="url(#clip-path-logs-menu)"
      >
        <path
          id="Trazado_7070"
          data-name="Trazado 7070"
          d="M.1,86.274v7.138a.806.806,0,0,0,.805.8H11.273a.806.806,0,0,0,.805-.8V86.274Zm4.482,1.274v.764a.324.324,0,0,1-.318.331H1.358a.325.325,0,0,1-.319-.331v-.764a.325.325,0,0,1,.319-.33H4.264a.324.324,0,0,1,.318.33Z"
          transform="translate(-0.135 -82.221)"
        />
        <path
          id="Trazado_7071"
          data-name="Trazado 7071"
          d="M11.273.1H.905A.806.806,0,0,0,.1.906v2.34H12.078V.906A.806.806,0,0,0,11.273.1"
          transform="translate(-0.135 -0.084)"
        />
      </g>
    </g>
  </svg>
);

export default LogsMenuIcon;
