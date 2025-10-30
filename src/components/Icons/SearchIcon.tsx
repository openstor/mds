// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <g data-name="search-icn">
        <path
          data-name="Trazado 399"
          d="M200.076 179.436a109.04 109.04 0 0 0 24.225-68.582C224.301 49.663 174.057 0 112.151 0S.001 49.663.001 110.854s50.243 110.855 112.15 110.855a111.975 111.975 0 0 0 66.393-21.58l52.037 51.437A15.108 15.108 0 0 0 241.048 256a14.929 14.929 0 0 0 10.467-25.423ZM29.908 110.854c0-44.933 36.785-81.293 82.243-81.293s82.243 36.36 82.243 81.293-37.084 81.293-82.243 81.293-82.243-36.36-82.243-81.293Z"
        />
      </g>
      <path data-name="Rect\xE1ngulo 866" fill="none" d="M0 0h256v255.7H0z" />
    </g>
  </svg>
);

export default SearchIcon;
