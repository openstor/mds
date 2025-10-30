// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const FileZipIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(98.5 35)">
      <path
        d="M188.5,255.714H14.5A14.5,14.5,0,0,1,0,241.214V14.5A14.5,14.5,0,0,1,14.5,0H128.833l.193.265L203,74.215v167a14.5,14.5,0,0,1-14.5,14.5Z"
        transform="translate(-72.5 -34.714)"
        fill="#f5a50d"
      />
      <path
        d="M83.167,74.126h64.747L73.787,0V64.732a10.146,10.146,0,0,0,9.38,9.394"
        transform="translate(-17.414 -34.714)"
        fill="#f4c64d"
      />
      <path
        d="M15.628,233a12.234,12.234,0,0,1-11.27-7.425,12.017,12.017,0,0,1-.961-4.732l6.795-38.5a12.079,12.079,0,0,1,3.582-8.6,12.234,12.234,0,0,1,8.649-3.561h8.834a12.237,12.237,0,0,1,11.269,7.425,12.017,12.017,0,0,1,.961,4.732l6.795,38.5a12.08,12.08,0,0,1-3.583,8.6A12.231,12.231,0,0,1,38.052,233Zm6.526-30.734a12.914,12.914,0,0,0-6.87,6.829,12.77,12.77,0,0,0,2.767,14.068,12.94,12.94,0,0,0,21.025-4.079,12.77,12.77,0,0,0-2.767-14.069,12.986,12.986,0,0,0-14.154-2.75ZM26.5,153.983V128.319H0V102.655H26.5v25.664H53v25.664Zm0-51.327V76.992H0V51.327H26.5V76.992H53v25.664Zm0-51.328V25.664H0V0H26.5V25.664H53V51.327Z"
        transform="translate(-60 -35)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileZipIcon;
