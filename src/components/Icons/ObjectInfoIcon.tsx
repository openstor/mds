// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ObjectInfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M128,3.14C58.12,3.14,1.46,59,1.46,128S58.12,252.86,128,252.86,254.54,197,254.54,128h0C254.48,59.07,197.86,3.2,128,3.14M84.46,204.56a36.93,36.93,0,0,1-37.09-36.65h0c0-20.24,16.63-36.65,37.14-36.65s37.14,16.41,37.14,36.65S105,204.56,84.51,204.56h0M100,122.67a13,13,0,0,1-13.11-12.9,12.77,12.77,0,0,1,1.76-6.48l26.52-45.38a13.18,13.18,0,0,1,17.88-4.74,13,13,0,0,1,4.8,4.74l26.55,45.38a12.83,12.83,0,0,1-4.78,17.65,13.14,13.14,0,0,1-6.57,1.73ZM208.74,185a17.12,17.12,0,0,1-17.24,17H154.22A17.12,17.12,0,0,1,137,185V148.24a17.11,17.11,0,0,1,17.21-17h37.22a17.12,17.12,0,0,1,17.25,17v0Z"
      transform="translate(-1.46 -3.14)"
    />
  </svg>
);

export default ObjectInfoIcon;
