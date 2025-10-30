// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const WarpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <defs>
      <clipPath id="prefix__a">
        <path d="M0 0h256v256H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="WarpIcon"
        d="M223.777 256c-4.293 0-7.777-3.137-7.777-7V7c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v242c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7V60c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v189c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7V111c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v138c0 3.862-3.482 7-7.777 7Zm-54 0c-4.293 0-7.777-3.137-7.777-7v-87c0-3.868 3.484-7 7.777-7h24.445c4.295 0 7.777 3.132 7.777 7v87c0 3.862-3.482 7-7.777 7Zm-54 0C3.484 256 0 252.863 0 249v-35c0-3.862 3.484-7 7.777-7h24.445c4.295 0 7.777 3.137 7.777 7v35c0 3.862-3.482 7-7.777 7Z"
      />
      <path data-name="Rect\xE1ngulo 922" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default WarpIcon;
