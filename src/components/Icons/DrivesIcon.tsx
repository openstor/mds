// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const DrivesIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path
        data-name="Trazado 423"
        d="M34.549 188.281h186.9a6.641 6.641 0 1 1 0 13.282h-186.9a6.641 6.641 0 0 1-6.641-6.641 6.641 6.641 0 0 1 6.641-6.641Z"
      />
      <path
        data-name="Trazado 425"
        d="M38.567 162.693a10.385 10.385 0 1 1-10.385 10.385 10.385 10.385 0 0 1 10.385-10.385Z"
      />
      <path
        data-name="Trazado 424"
        d="M66.709 162.83a10.384 10.384 0 1 1-8.588 11.911 10.384 10.384 0 0 1 8.588-11.912Z"
      />
      <path
        data-name="Trazado 405"
        d="M255.699 154.149a37.6 37.6 0 0 0-2.994-12.568l-41.95-104.219C207.537 29.62 199.33 24 191.241 24H64.759c-8.089 0-16.3 5.62-19.514 13.362L3.295 141.581a37.61 37.61 0 0 0-2.994 12.568 22.107 22.107 0 0 0-.3 3.612v51.4a22.089 22.089 0 0 0 22.065 22.064h211.87a22.09 22.09 0 0 0 22.065-22.064v-51.4a22.134 22.134 0 0 0-.302-3.612ZM65.754 46.413h124.491l36.053 89.283H30.013Zm167.833 162.4H22.412v-50.708h211.175Z"
      />
      <path data-name="Rect\xE1ngulo 855" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default DrivesIcon;
