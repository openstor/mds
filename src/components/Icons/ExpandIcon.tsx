// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ExpandIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M170.6,2.2l32.3,32.3l-40.6,40.3l19.9,19.9l40.3-40.6l32.3,32.3V2.2H170.6z M2.2,86.4l32.3-32.3l40.3,40.6l19.9-19.9
	L54.1,34.4L86.4,2.2H2.2V86.4z M86.4,254.8l-32.3-32.3l40.6-40.3l-19.9-19.9l-40.3,40.6L2.2,170.6v84.2H86.4z M254.8,170.6
	l-32.3,32.3l-40.3-40.6l-19.9,19.9l40.6,40.3l-32.3,32.3h84.2V170.6z"
    />
  </svg>
);

export default ExpandIcon;
