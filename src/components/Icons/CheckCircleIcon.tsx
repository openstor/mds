// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const CheckCircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M0,128C0,57.3,57.3,0,128,0c70.7,0,128,57.3,128,128l0,0c0,70.7-57.3,128-128,128h0C57.3,256,0,198.7,0,128
			C0,128,0,128,0,128L0,128z M25,128c0.1,56.9,46.1,102.9,103,103c56.9-0.1,102.9-46.1,103-103c-0.1-56.9-46.1-102.9-103-103
			C71.1,25.1,25.1,71.1,25,128L25,128z"
    />
    <path
      d="M199.1,91.8L199.1,91.8L126,183.2c-2.5,2.7-6.1,4.3-9.8,4.4h-0.3c-3.6,0-7.1-1.4-9.7-4l0,0l-48.4-48.4
	c-5.8-4.9-6.5-13.5-1.6-19.3s13.5-6.5,19.3-1.6c0.3,0.2,0.6,0.5,0.8,0.8c0.3,0.3,0.6,0.5,0.8,0.8l38.4,38.3l63.6-81l0.4-0.4l0,0
	c5.3-5.4,14-5.6,19.4-0.3C204.3,77.6,204.4,86.3,199.1,91.8L199.1,91.8"
    />
  </svg>
);

export default CheckCircleIcon;
