// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSObject } from "styled-components";

export interface IconBase {
  label?: string;
  size?: "small" | "medium" | "large" | string;
  sx?: CSSObject;
  children: React.ReactNode;
}

export type IconButtonProps = IconBase &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
