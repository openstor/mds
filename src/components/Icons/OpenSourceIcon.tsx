// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const OpenSourceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 12.425 12.024"
    {...props}
  >
    <path
      id="opensource"
      d="M8.4,12.024,7.074,8.372a2.312,2.312,0,0,0,1.468-2.16,2.32,2.32,0,0,0-2.33-2.33,2.32,2.32,0,0,0-2.33,2.33,2.313,2.313,0,0,0,1.468,2.16L4.028,12.024A6.2,6.2,0,0,1,1.122,9.761,5.992,5.992,0,0,1,0,6.212,6.094,6.094,0,0,1,.491,3.8,6.079,6.079,0,0,1,3.8.491a6.177,6.177,0,0,1,4.829,0A6.079,6.079,0,0,1,11.933,3.8a6.094,6.094,0,0,1,.491,2.415A5.993,5.993,0,0,1,11.3,9.761,6.2,6.2,0,0,1,8.4,12.024Z"
      fill="#fff"
    />
  </svg>
);

export default OpenSourceIcon;
