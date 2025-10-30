// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CertificateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <clipPath id="certificate_svg__a">
          <path data-name="Rect\xE1ngulo 2156" d="M0 0h256v222.048H0z" />
        </clipPath>
      </defs>
      <g
        data-name="Grupo 4763"
        transform="translate(0 17)"
        clipPath="url(#certificate_svg__a)"
      >
        <path
          data-name="Trazado 8152"
          d="M240-.002H16a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h120l4.64-5.6 7.44-9.12A66.72 66.72 0 0 1 256 98.958v-82.96a16 16 0 0 0-16-16m-130.96 149.7H47.3a7.3 7.3 0 1 1 0-14.592h61.74a7.3 7.3 0 1 1 0 14.592m0-56H47.3a7.3 7.3 0 1 1 0-14.592h61.74a7.3 7.3 0 0 1 0 14.592m66.96-39.3a6.419 6.419 0 0 1-6.4 6.4H46.4a6.419 6.419 0 0 1-6.4-6.4v-1.792a6.419 6.419 0 0 1 6.4-6.4h123.2a6.419 6.419 0 0 1 6.4 6.4Z"
        />
        <path
          data-name="Trazado 8153"
          d="M256 137.486a50.96 50.96 0 1 0-86.16 36.72l-15.52 18.96 7.2 28.88 29.28-35.68a50.018 50.018 0 0 0 28.4 0l29.28 35.68 7.2-28.88-15.52-18.96a50.75 50.75 0 0 0 15.84-36.72m-50.928 29.688a29.688 29.688 0 0 1-.072-59.376h.072a29.688 29.688 0 0 1 0 59.376"
        />
      </g>
      <path data-name="Rect\xE1ngulo 2157" fill="none" d="M0 0h256v256H0z" />
    </svg>
  );
};
export default CertificateIcon;
