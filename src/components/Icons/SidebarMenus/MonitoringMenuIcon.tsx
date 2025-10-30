// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const MonitoringMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 16 16"
    {...props}
  >
    <defs>
      <clipPath id="clip-path-monitoring-icon">
        <rect
          id="Rectángulo_1587"
          data-name="Rectángulo 1587"
          width="16"
          height="16"
        />
      </clipPath>
    </defs>
    <g
      id="Grupo_2441"
      data-name="Grupo 2441"
      clipPath="url(#clip-path-monitoring-icon)"
    >
      <path
        id="Trazado_7103"
        data-name="Trazado 7103"
        d="M15.551,13.464,12.973,10.9a6.932,6.932,0,0,0,.846-1.72H10.813A4.386,4.386,0,0,1,2.646,7.03a4.377,4.377,0,0,1,8.744-.222h2.776A7.086,7.086,0,0,0,0,7.013a7.056,7.056,0,0,0,7.083,7.012H7.1a7.019,7.019,0,0,0,3.73-1.063l2.629,2.6A1.489,1.489,0,0,0,14.5,16h.016a1.487,1.487,0,0,0,1.038-2.536Z"
      />
      <path
        id="Trazado_7104"
        data-name="Trazado 7104"
        d="M164.692,167.057a.271.271,0,0,0-.264-.213h0a.271.271,0,0,0-.264.211l-.218.966-.187-.572a.271.271,0,0,0-.526.051l-.249,2.03-.859-4.085a.271.271,0,0,0-.527-.011l-.765,3a.713.713,0,1,0,.512.183l.489-1.919.955,4.54a.271.271,0,0,0,.265.215h.012a.271.271,0,0,0,.257-.238l.3-2.437.114.351a.271.271,0,0,0,.521-.025l.167-.741.156.71a.271.271,0,0,0,.264.213h6.909a.271.271,0,0,0,0-.542h-6.692Z"
        transform="translate(-156.025 -160.967)"
      />
    </g>
  </svg>
);

export default MonitoringMenuIcon;
