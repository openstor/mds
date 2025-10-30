// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CallHomeMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 13.754 14.047"
    {...props}
  >
    <path
      id="call-home-icon"
      d="M-2188.145,31.22l-5.076-5.082a2.671,2.671,0,0,1-.779-1.885,2.671,2.671,0,0,1,.779-1.885l1.453-1.453a.312.312,0,0,1,.439,0l2.334,2.336a.31.31,0,0,1,0,.439l-.717.718a.285.285,0,0,0,0,.4l2.9,2.9a.285.285,0,0,0,.4,0l.717-.718a.311.311,0,0,1,.44,0l2.327,2.332a.311.311,0,0,1,0,.44l-1.453,1.452a2.664,2.664,0,0,1-1.885.779A2.667,2.667,0,0,1-2188.145,31.22Zm2.6-6.814a.561.561,0,0,1-.562-.562V22.09h-.209a.561.561,0,0,1-.53-.362.56.56,0,0,1,.156-.622l2.245-1.964a.56.56,0,0,1,.748,0l2.245,1.964a.56.56,0,0,1,.156.622.561.561,0,0,1-.53.362h-.21v1.754a.56.56,0,0,1-.561.562Z"
      transform="translate(2194.5 -18.452)"
      stroke="rgba(0,0,0,0)"
      strokeWidth="1"
    />
  </svg>
);

export default CallHomeMenuIcon;
