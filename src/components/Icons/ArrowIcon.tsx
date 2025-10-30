// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
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
          data-name="arrow-icn"
          d="M19.795 108.063c-26.394 0-26.394 40.032 0 40.032h167.688l-22.739 22.669c-18.656 18.622 9.725 46.922 28.382 28.316l56.877-56.732a19.991 19.991 0 000-28.548l-56.877-56.716c-18.656-18.6-47.038 9.684-28.382 28.3l22.739 22.68H19.795z"
        />
        <path data-name="Rect\xE1ngulo 863" fill="none" d="M0 0h256v256H0z" />
      </g>
    </svg>
  );
};

export default ArrowIcon;
