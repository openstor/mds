// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ShareIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path data-name="Rect\xE1ngulo 860" fill="none" d="M0 0h256v256H0z" />
      <g data-name="share-icn">
        <path
          data-name="Trazado 410"
          d="M251.315 67.671 207.79 25.459c-14.279-13.851-35.342 7.862-21.063 21.716l12.959 12.567a156.689 156.689 0 0 0-82.95 23.182 156.774 156.774 0 0 0-71.051 97.677 15.547 15.547 0 0 0 11.474 18.755 15.62 15.62 0 0 0 3.655.438 15.555 15.555 0 0 0 15.1-11.909c14.6-60.586 70.74-100.461 130.9-96.758l-3.335 4.317-15.767 16.248c-13.849 14.285 7.867 35.345 21.719 21.063l42.214-43.518a15.131 15.131 0 0 0-.33-21.566Z"
        />
        <path
          data-name="Trazado 411"
          d="M229.501 156.071c-7.927 0-14.351 6.747-14.351 15.066v54.731H28.703V30.133h126.71c7.925 0 14.351-6.744 14.351-15.066S163.337.001 155.413.001h-130.1C11.356.001.002 11.921.002 26.575v202.854c0 14.652 11.354 26.572 25.311 26.572h193.23c13.957 0 25.311-11.92 25.311-26.572v-58.291c-.001-8.32-6.428-15.067-14.353-15.067Z"
        />
      </g>
    </g>
  </svg>
);

export default ShareIcon;
