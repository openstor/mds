// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSProperties } from "styled-components";

export interface BackLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  label?: string;
}
