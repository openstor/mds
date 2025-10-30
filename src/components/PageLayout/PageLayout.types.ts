// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSObject } from "styled-components";

export interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React.ReactNode;
  className?: string;
  sx?: CSSObject;
}
