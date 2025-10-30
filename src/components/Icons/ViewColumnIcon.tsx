// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ViewColumnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width="73.79" height="237.57" rx="12" ry="12" />
    <rect x="86.31" width="73.79" height="237.57" rx="12" ry="12" />
    <rect x="172.62" width="73.79" height="237.57" rx="12" ry="12" />
  </svg>
);

export default ViewColumnIcon;
