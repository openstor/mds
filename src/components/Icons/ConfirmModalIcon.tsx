// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ConfirmModalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"min-icon"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectángulo_1028"
          data-name="Rectángulo 1028"
          width="256"
          height="256"
          fill="none"
        />
      </clipPath>
      <clipPath id="clip-Generic_Confirmation">
        <rect width="256" height="256" />
      </clipPath>
    </defs>
    <g
      id="Generic_Confirmation"
      data-name="Generic Confirmation"
      clipPath="url(#clip-Generic_Confirmation)"
    >
      <g id="Generic_Confirmation_Icon" data-name="Generic Confirmation Icon">
        <g id="Grupo_2416" data-name="Grupo 2416">
          <path
            id="Trazado_7167"
            data-name="Trazado 7167"
            d="M128,0A128,128,0,1,0,256,128,128,128,0,0,0,128,0m.762,229.13A101.13,101.13,0,1,1,229.892,128a101.13,101.13,0,0,1-101.13,101.13M167.851,81.8,111,137.769,90.83,117.862A14.916,14.916,0,0,0,69.884,139.1l41.148,40.543,77.952-76.6a14.973,14.973,0,1,0-20.732-21.609q-.188.181-.37.367Z"
            fill="#4ccb92"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default ConfirmModalIcon;
