// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import * as React from "react";
import { SVGProps } from "react";

const ChatIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="m35.47,235.89c.11-9.4-.8-18.79-2.71-27.99-18.21-6.29-30.44-23.44-30.44-42.71V62.1c0-24.94,20.22-45.16,45.16-45.16h161.01c24.94,0,45.16,20.22,45.16,45.16h0v103.09c0,24.94-20.22,45.16-45.16,45.16H76.89c-6.31,6.49-17.88,16.75-36.84,28.28-.45.28-.97.42-1.5.42-1.72-.02-3.1-1.43-3.08-3.15v-.02Z" />
  </svg>
);

export default ChatIcon;
