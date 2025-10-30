// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g id="trash-icn" transform="translate(0 0)">
      <path
        fill={"currentcolor"}
        d="M219.6,16.2h-49.7V8.4c0-3.4-2.7-6.1-6.1-6.1H92.2c-3.4,0-6.1,2.7-6.1,6.1v7.8H36.3
		c-3.4,0-6.1,2.8-6.1,6.2V38c0,3.4,2.7,6.1,6.1,6.1h183.3c3.4,0,6.1-2.7,6.1-6.1V22.4C225.8,19,223.1,16.2,219.6,16.2
		C219.7,16.2,219.6,16.2,219.6,16.2z"
      />
      <path
        fill={"currentcolor"}
        d="M44.2,225.5c0,15.6,12.7,28.2,28.2,28.2h111.2c15.6-0.1,28.2-12.7,28.2-28.2V58.1H44.2V225.5z"
      />
    </g>
  </svg>
);
export default DeleteIcon;
