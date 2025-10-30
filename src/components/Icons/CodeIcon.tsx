// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M94.8,186.7L36.1,128l58.7-58.7L76.9,51.4L0.3,128l76.6,76.6L94.8,186.7z M161.2,186.7l58.7-58.7l-58.7-58.7l17.9-17.9
	l76.6,76.6l-76.6,76.6C179.1,204.6,161.2,186.7,161.2,186.7z"
    />
  </svg>
);

export default CodeIcon;
