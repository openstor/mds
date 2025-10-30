// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const UploadFile = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      className={`min-icon`}
      fill={"currentcolor"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13 12.996"
    >
      <g transform="translate(-63.686 -70.783)">
        <path
          className="a"
          d="M74.736,79.879v1.95h-9.1v-1.95h-1.95v3.9h13v-3.9Z"
        />
        <path
          className="a"
          d="M69.211,80.533h1.95V73.861h1.525l-2.5-3.078-2.5,3.078h1.525Z"
        />
      </g>
    </svg>
  );
};

export default UploadFile;
