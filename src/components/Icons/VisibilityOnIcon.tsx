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
    <path d="m127.98,44.38c-55.8,0-103.5,34.8-122.9,83.8,19.3,49,67,83.8,122.9,83.8s103.5-34.8,122.9-83.8c-19.4-49-67.1-83.8-122.9-83.8Zm0,139.6c-30.8,0-55.8-25-55.8-55.8s25-55.8,55.8-55.8,55.8,25,55.8,55.8-25,55.8-55.8,55.8Zm0-89.3c-18.5,0-33.5,15-33.5,33.5s15,33.5,33.5,33.5,33.5-15,33.5-33.5-15-33.5-33.5-33.5Z" />
  </svg>
);

export default ViewColumnIcon;
