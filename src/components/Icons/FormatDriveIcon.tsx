// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const FormatDriveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m217.35,144.9h24.15v-24.15h-24.15v24.15Zm0-108.67v60.38h24.15v-60.38h-24.15ZM96.6,0C43.23,0,0,43.23,0,96.6s43.23,96.6,96.6,96.6,96.6-43.23,96.6-96.6S149.97,0,96.6,0Zm0,120.75c-13.28,0-24.15-10.87-24.15-24.15s10.87-24.15,24.15-24.15,24.15,10.87,24.15,24.15-10.87,24.15-24.15,24.15Z" />
  </svg>
);

export default FormatDriveIcon;
