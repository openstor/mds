// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m113.5,227.69l-25.36-54.39c-1.57-3.35-2.71-6.89-3.39-10.53-.62-2.1-.94-4.28-.94-6.46V33.94c0-12.51,10.15-22.66,22.66-22.66,0,0,0,0,0,0l91.85-.87c14.98-.99,33.96,22.75,33.96,35.27l19.21,110.63c0,12.51-10.15,22.66-22.66,22.66h-80.92c6.68,20.79,11.05,48.44.5,57.39-5.67,4.81-11.16,7.43-16.29,7.43-7.08,0-13.46-4.99-18.63-16.09ZM11.25,170.71c-3.73,0-6.75-3.02-6.75-6.75V18.03c0-3.73,3.02-6.75,6.75-6.75h46.31c3.73,0,6.75,3.02,6.75,6.75v145.93c0,3.73-3.02,6.75-6.75,6.75H11.25Z" />
  </svg>
);

export default ThumbsDownIcon;
