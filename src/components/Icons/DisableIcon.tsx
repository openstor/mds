// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const DisableIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m119,0C53.31,0,0,53.31,0,119s53.31,119,119,119,119-53.31,119-119S184.69,0,119,0Zm59.5,130.9H59.5v-23.8h119v23.8Z" />
  </svg>
);

export default DisableIcon;
