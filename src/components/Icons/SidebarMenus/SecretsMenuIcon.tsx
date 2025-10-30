// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const SecretsMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      id="KMS"
      d="M175.664,255.209V228.695H79.546v26.515H46.4V228.695H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H252.21a3,3,0,0,1,3,3V225.694a3,3,0,0,1-3,3h-43.4v26.515ZM23.2,29.83V198.865a9.954,9.954,0,0,0,9.943,9.943H222.065a9.954,9.954,0,0,0,9.943-9.943V29.83a9.954,9.954,0,0,0-9.943-9.943H33.144A9.954,9.954,0,0,0,23.2,29.83ZM222.065,198.866h0Zm-188.921,0V29.83H222.065V198.865H33.144ZM69.224,88.258a26.52,26.52,0,1,0,34.909,34.375h33.071a2,2,0,0,0,2-2V104.747a2,2,0,0,0-2-2H104.134A26.545,26.545,0,0,0,69.224,88.258ZM59.659,112.69a19.886,19.886,0,1,1,19.886,19.886A19.887,19.887,0,0,1,59.659,112.69Z"
    />
  </svg>
);

export default SecretsMenuIcon;
