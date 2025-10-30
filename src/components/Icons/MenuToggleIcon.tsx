// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const MenuToggleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 10 14"
    {...props}
  >
    <g transform="translate(19825 -11601) rotate(-90)">
      <path
        d="M-21-212v-2H-7v2Zm0-4v-2H-7v2Zm0-4v-2H-7v2Z"
        transform="translate(-11594 -19603)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default MenuToggleIcon;
