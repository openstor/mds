// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CancelledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M126.09,0C56.45,0,0,56.45,0,126.09s56.45,126.09,126.09,126.09,126.09-56.45,126.09-126.09S195.72,0,126.09,0Zm79.61,146.23H46.48c-11.08,0-20.14-9.07-20.14-20.14h0c0-11.08,9.07-20.14,20.14-20.14H205.7c11.08,0,20.14,9.07,20.14,20.14h0c0,11.08-9.07,20.14-20.14,20.14Z" />
  </svg>
);

export default CancelledIcon;
