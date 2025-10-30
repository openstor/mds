// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const RefreshIcon = (props: SVGProps<SVGSVGElement>) => (
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
        data-name="Trazado 373"
        d="M18 145.888A110.2 110.2 0 0 1 126.767 35.85L113.78 22.869c-12.378-12.378 6.448-31.2 18.822-18.824l37.722 37.72a13.32 13.32 0 0 1 0 18.979l-37.722 37.714c-12.374 12.374-31.2-6.442-18.822-18.82l14.085-14.085a80.434 80.434 0 0 0-80.1 80.335 80.443 80.443 0 0 0 80.349 80.35 80.441 80.441 0 0 0 80.349-80.35 14.878 14.878 0 0 1 14.879-14.877 14.879 14.879 0 0 1 14.882 14.877A110.234 110.234 0 0 1 128.114 256 110.232 110.232 0 0 1 18 145.888Z"
      />
      <path data-name="Rect\xE1ngulo 871" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default RefreshIcon;
