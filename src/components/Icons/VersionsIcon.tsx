// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const VersionsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      id="Path_7269"
      d="M147.85,227.97c-2.7,0-4.89-2.19-4.89-4.89l0,0V32.93c0-2.7,2.19-4.89,4.89-4.89c0,0,0,0,0,0
	h98.98c2.7,0,4.89,2.19,4.89,4.89c0,0,0,0,0,0v190.14c0,2.7-2.19,4.89-4.89,4.89l0,0H147.85z M71.37,205.43
	c-2.7,0-4.89-2.19-4.89-4.89l0,0V55.48c-0.01-2.7,2.17-4.9,4.87-4.91c0.01,0,0.01,0,0.02,0h56.4c2.7,0,4.89,2.19,4.89,4.89l0,0
	v145.05c0,2.7-2.19,4.89-4.89,4.89c0,0,0,0,0,0L71.37,205.43z M9.17,182.88c-2.7,0-4.88-2.18-4.89-4.87V78.02
	c0-2.7,2.19-4.89,4.89-4.89h42.15c2.7,0,4.89,2.19,4.89,4.89V178c0,2.7-2.19,4.89-4.89,4.89l0,0L9.17,182.88z"
    />
  </svg>
);

export default VersionsIcon;
