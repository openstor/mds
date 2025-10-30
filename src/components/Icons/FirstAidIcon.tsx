// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const FirstAidIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M226.3,1.7H29.7C14.3,1.7,1.8,14.3,1.8,29.7L1.7,226.3c0,15.4,12.6,28.1,28.1,28.1h196.5c15.4,0,28.1-12.6,28.1-28.1V29.7
	C254.3,14.3,241.7,1.7,226.3,1.7z M212.2,156.1h-56.1v56.1H99.9v-56.1H43.8V99.9h56.1V43.8h56.1v56.1h56.1V156.1z"
    />
  </svg>
);

export default FirstAidIcon;
