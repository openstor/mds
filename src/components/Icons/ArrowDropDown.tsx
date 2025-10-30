// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m113.56,107.2L.99,5.22C-1.04,3.38.26,0,3.01,0h225.15c2.74,0,4.05,3.38,2.01,5.22l-112.57,101.97c-1.14,1.04-2.89,1.04-4.03,0Z" />
  </svg>
);

export default ArrowDropUp;
