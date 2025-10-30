// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const DocumentationIcon = (props: SVGProps<SVGSVGElement>) => (
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
        data-name="documentation-icn"
        d="M19.922 256.001H8.633a8.842 8.842 0 0 1-8.631-8.962V77.449a8.845 8.845 0 0 1 8.631-8.962h7.291a8.841 8.841 0 0 1 8.645 8.962v152.944h119.164a8.848 8.848 0 0 1 8.65 8.962v7.685a8.845 8.845 0 0 1-8.65 8.962Zm41.08-46a14.994 14.994 0 0 1-15-15v-180a15 15 0 0 1 15-15h180a15 15 0 0 1 15 15v180a15 15 0 0 1-15 15Zm5-20h170v-170h-170Zm28.742-18.884a.906.906 0 0 1-.9-.906v-23.3a.906.906 0 0 1 .9-.906H210a.907.907 0 0 1 .906.906v23.3a.907.907 0 0 1-.906.906Zm0-52a.91.91 0 0 1-.9-.91v-23.3a.909.909 0 0 1 .9-.905H210a.909.909 0 0 1 .906.905v23.3a.91.91 0 0 1-.906.91Zm0-53a.91.91 0 0 1-.9-.91v-23.3a.907.907 0 0 1 .9-.91H210a.908.908 0 0 1 .906.91v23.3a.911.911 0 0 1-.906.91Z"
        stroke="rgba(0,0,0,0)"
        strokeMiterlimit={10}
      />
      <path data-name="Rect\xE1ngulo 876" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default DocumentationIcon;
