// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
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
      <path data-name="Rect\xE1ngulo 858" fill="none" d="M0 0h256v256H0z" />
      <path
        data-name="Uni\xF3n 20"
        d="M102.405 230.399v-76.79h-76.8a25.607 25.607 0 0 1 0-51.214h76.8V25.601a25.6 25.6 0 1 1 51.2 0v76.792h76.8a25.607 25.607 0 0 1 0 51.214h-76.8v76.792a25.6 25.6 0 1 1-51.2 0Z"
      />
    </g>
  </svg>
);

export default AddIcon;
