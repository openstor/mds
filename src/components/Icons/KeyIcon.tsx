// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      d="M135.5,105c-9.4-26.8-34.9-45.9-64.9-45.9C32.5,59.1,1.6,90,1.6,128s30.9,68.9,68.9,68.9c30,0,55.5-19.2,64.9-45.9h50v45.9
	h45.9V151h23V105H135.5z M70.6,151c-12.6,0-23-10.3-23-23s10.3-23,23-23s23,10.3,23,23S83.2,151,70.6,151z"
    />
  </svg>
);

export default LoginIcon;
