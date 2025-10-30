// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const BackSettingsIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <g data-name="Back Settings" clipPath="url(#prefix__a)">
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="arrow-icn"
        d="M236.198 108.063c26.394 0 26.394 40.032 0 40.032H68.514l22.739 22.668c18.656 18.623-9.726 46.923-28.382 28.318L5.998 142.348a19.991 19.991 0 0 1 0-28.548l56.877-56.716c18.656-18.6 47.038 9.684 28.382 28.3l-22.743 22.679h167.684Z"
      />
      <path data-name="Rect\xE1ngulo 863" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default BackSettingsIcon;
