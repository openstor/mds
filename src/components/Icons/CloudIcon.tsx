// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CloudIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m199.51,62.28C192.5,26.7,161.26,0,123.73,0c-29.8,0-55.68,16.91-68.57,41.66C24.13,44.95,0,71.25,0,103.11c0,34.13,27.74,61.86,61.86,61.86h134.04c28.46,0,51.55-23.1,51.55-51.55s-21.14-49.28-47.94-51.14Z" />
  </svg>
);

export default CloudIcon;
