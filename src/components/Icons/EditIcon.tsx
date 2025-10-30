// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const EditIcon = (props: SVGProps<SVGSVGElement>) => (
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
        data-name="edit-icn"
        d="M201.683 0a56.44 56.44 0 0 0-38.86 15.85L18.897 159.94a13.219 13.219 0 0 0-3.838 7.2L.187 239.67a13.355 13.355 0 0 0 3.838 12.488A14.56 14.56 0 0 0 14.1 256a6.078 6.078 0 0 0 2.879-.48l71.962-13.932a13.2 13.2 0 0 0 7.2-3.842L240.063 93.658c21.109-21.133 21.109-56.2 0-77.328A52.948 52.948 0 0 0 201.683 0ZM51.521 220.938a29.883 29.883 0 0 0-6.717-9.126 40.622 40.622 0 0 0-9.115-6.724l5.277-24.976a46.056 46.056 0 0 1 23.508 12.008 42.7 42.7 0 0 1 11.994 23.535ZM220.393 73.966 92.299 201.726a56.271 56.271 0 0 0-14.872-23.054 65.573 65.573 0 0 0-23.028-14.89l128.094-128.24a26.406 26.406 0 0 1 19.19-7.685 28.509 28.509 0 0 1 19.19 7.685 27.729 27.729 0 0 1-.48 38.424Z"
      />
      <path data-name="Rect\xE1ngulo 867" fill="none" d="M0 0h256v256H0z" />
    </g>
  </svg>
);

export default EditIcon;
