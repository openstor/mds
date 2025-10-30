// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ConsoleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m215.56,0H21.56C9.7,0,0,9.7,0,21.56v150.89c0,11.86,9.7,21.56,21.56,21.56h194c11.86,0,21.56-9.7,21.56-21.56V21.56c0-11.86-9.7-21.56-21.56-21.56Zm0,172.44H21.56v-32.33h194v32.33Z" />
  </svg>
);

export default ConsoleIcon;
