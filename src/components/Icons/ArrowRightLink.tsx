// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const ArrowRightLink = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      {...props}
      viewBox="0 0 12.621 7.619"
    >
      <path
        d="M2.82.976A.989.989,0,0,1,4.8.976V9.243L5.919,8.122a.989.989,0,0,1,1.4,1.4l-2.8,2.8a.989.989,0,0,1-1.411,0L.3,9.521a.989.989,0,0,1,1.4-1.4L2.82,9.243V.976Z"
        transform="translate(0 7.619) rotate(-90)"
        fill="#2781b0"
      />
    </svg>
  );
};

export default ArrowRightLink;
