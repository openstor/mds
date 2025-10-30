// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const InspectMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 12 12.001"
    {...props}
  >
    <path
      id="InspectIcon"
      d="M-2191.428,31a1.876,1.876,0,0,1-1.715-2V27.5h1.285V29a.47.47,0,0,0,.429.5h6.857a.47.47,0,0,0,.428-.5V27.5h1.286V29a1.877,1.877,0,0,1-1.715,2ZM-2194,26V24h12v2Zm2.142-3.5h-1.284V21a1.876,1.876,0,0,1,1.715-2h6.857a1.876,1.876,0,0,1,1.715,2v1.5h-1.286V21a.469.469,0,0,0-.428-.5h-6.857a.469.469,0,0,0-.429.5v1.5h0Z"
      transform="translate(2194 -19)"
    />
  </svg>
);

export default InspectMenuIcon;
