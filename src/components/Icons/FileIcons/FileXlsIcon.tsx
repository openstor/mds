// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const FileXlsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(10.499)">
      <path
        d="M188.5,256H14.5A14.5,14.5,0,0,1,0,241.5V14.5A14.5,14.5,0,0,1,14.5,0H128.834l.192.265L203,74.3V241.5A14.5,14.5,0,0,1,188.5,256Z"
        transform="translate(15.501 0)"
        fill="#117d43"
      />
      <path
        d="M83.178,74.209H148L73.787,0V64.8a10.157,10.157,0,0,0,9.391,9.4"
        transform="translate(70.503)"
        fill="#52d186"
      />
      <path
        d="M12.129,91.947A12.143,12.143,0,0,1,0,79.789V12.158A12.143,12.143,0,0,1,12.129,0H116.662A12.143,12.143,0,0,1,128.79,12.158V79.789a12.143,12.143,0,0,1-12.129,12.158ZM113.292,76.412V54.105H91.776V76.412Zm-37.013,0V54.105H53.454V76.412Zm-60.781,0H37.956V54.105H15.5Zm97.794-37.843V15.536H91.776V38.569Zm-37.013,0V15.536H53.454V38.569Zm-38.323,0V15.536H15.5V38.569Z"
        transform="translate(52.605 115.799)"
        fill="#fff"
      />
    </g>
  </svg>
);

export default FileXlsIcon;
