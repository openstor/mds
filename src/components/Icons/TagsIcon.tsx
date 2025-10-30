// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const TagsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M8.18,94.43V21.24A20.26,20.26,0,0,1,27.69,1.74h73.19A51,51,0,0,1,134.25,15.6L242.6,136.2a21,21,0,0,1,0,27.73l-84.8,84.81a20.17,20.17,0,0,1-27.74,0L22.05,127.8A55.46,55.46,0,0,1,8.18,94.43ZM39.94,52.24a19.31,19.31,0,0,0,18.7,18.94A19.42,19.42,0,0,0,77.58,52.24,19.29,19.29,0,0,0,58.64,33.53,19.17,19.17,0,0,0,39.94,52.24Z"
      transform="translate(-8.18 -1.74)"
    />
  </svg>
);

export default TagsIcon;
