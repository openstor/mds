// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const StatusMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      id="KMS-status"
      d="M-13110.45-17976.135a8.3,8.3,0,0,1-7.6-4.979l-30.661-70.426h-41.776a8.3,8.3,0,0,1-8.292-8.3,8.3,8.3,0,0,1,8.292-8.3h47.211a8.289,8.289,0,0,1,7.6,4.98l23.306,53.533,32.412-122.619a8.3,8.3,0,0,1,8.017-6.178h.074a8.293,8.293,0,0,1,7.978,6.336l23.061,94.307,25.367-45.307a8.267,8.267,0,0,1,7.232-4.254c.136,0,.276,0,.416.01a8.315,8.315,0,0,1,7.189,4.979l20.733,47.732h28.818a8.292,8.292,0,0,1,8.293,8.287,8.294,8.294,0,0,1-8.293,8.3h-34.254a8.273,8.273,0,0,1-7.6-4.988l-16.239-37.379-27.48,49.107a8.274,8.274,0,0,1-7.233,4.244,9.94,9.94,0,0,1-1.12-.07,8.309,8.309,0,0,1-6.936-6.258l-20.317-83.1-30.171,114.166a8.3,8.3,0,0,1-7.387,6.152C-13110.021-17976.143-13110.24-17976.135-13110.45-17976.135Z"
      transform="translate(13198.776 18138.416)"
    />
  </svg>
);

export default StatusMenuIcon;
