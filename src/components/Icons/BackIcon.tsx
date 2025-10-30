// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const BackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      {...props}
      viewBox="0 0 18 12"
    >
      <defs />
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g fill={"currentcolor"} id="Fill-2">
          <polygon points="17.9999987 4.99999934 3.82999951 4.99999934 7.40999918 1.4099994 5.99999946 -3.60000001e-07 -1.80000029e-07 5.99999928 5.99999946 11.9999989 7.40999918 10.5899991 3.82999951 6.99999922 17.9999987 6.99999922"></polygon>
        </g>
      </g>
    </svg>
  );
};

export default BackIcon;
