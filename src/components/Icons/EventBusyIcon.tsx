// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M93.9,204l30.9-30.9l30.9,30.9l13.4-13.4l-30.9-30.9l30.9-30.9l-13.4-13.4l-30.9,30.9l-30.9-30.9l-13.4,13.4l30.9,30.9
        l-30.9,30.9L93.9,204z M216.7,26.6H204V1.3h-25.3v25.3H77.3V1.3H52v25.3H39.3C25.2,26.6,14.1,38,14.1,52l-0.1,177.4
        c0,13.9,11.3,25.3,25.3,25.3h177.4c13.9,0,25.3-11.4,25.3-25.3V52C242.1,38,230.6,26.6,216.7,26.6z M216.7,229.4H39.3V90h177.4
        V229.4z"
    />
  </svg>
);

export default ShuffleIcon;
