// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const TierOfflineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      id="offline-icon"
      d="M91.4,4.551l-.825-.825-2.44,2.439L85.7,3.726l-.825.825L87.312,6.99,84.873,9.429l.825.825,2.439-2.439,2.44,2.439.825-.825L88.961,6.99Zm-.155,9.44H85.027l-3.89-4.279V4.269L85.027-.01h6.219l3.89,4.279V9.711Z"
      transform="translate(-81.136 0.01)"
      fill="#c83b51"
      fillRule="evenodd"
    />
  </svg>
);

export default TierOfflineIcon;
