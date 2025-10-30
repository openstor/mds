// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CompressIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M79.2,219.4h36.6V256h24.4v-36.6h36.6L128,170.7L79.2,219.4z M176.8,36.6h-36.6V0h-24.4v36.6H79.2L128,85.3L176.8,36.6z" />
    <line className="st0" x1="7.6" y1="87.9" x2="248.4" y2="87.9" />
    <path
      d="M237.6,123.4H18.4c-5.9,0-10.7-4.8-10.7-10.7v-3.9c0-5.9,4.8-10.7,10.7-10.7h219.3c5.9,0,10.7,4.8,10.7,10.7v3.9
	C248.4,118.6,243.5,123.4,237.6,123.4z"
    />
    <path
      d="M237.6,160.5H18.4c-5.9,0-10.7-4.8-10.7-10.7v-3.9c0-5.9,4.8-10.7,10.7-10.7h219.3c5.9,0,10.7,4.8,10.7,10.7v3.9
	C248.4,155.7,243.5,160.5,237.6,160.5z"
    />
  </svg>
);

export default CompressIcon;
