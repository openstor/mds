// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const PasswordKeyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 14 14"
      {...props}
    >
      <path
        d="M141.421,148.182a4.5,4.5,0,0,0-4.3,5.805l-5.188,5.195v3h3l5.187-5.2a4.5,4.5,0,0,0,5.8-3.936,4.39,4.39,0,0,0-.823-3A4.492,4.492,0,0,0,141.421,148.182Zm.5,5a1,1,0,1,1,1-1A1,1,0,0,1,141.92,153.182Z"
        transform="translate(-131.934 -148.182)"
      />
    </svg>
  );
};

export default PasswordKeyIcon;
