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
    <path d="m117.59.78l112.57,101.97c2.03,1.84.73,5.22-2.01,5.22H3.01c-2.74,0-4.05-3.38-2.01-5.22L113.56.78c1.14-1.04,2.89-1.04,4.03,0Z" />
  </svg>
);

export default ArrowDropUp;
