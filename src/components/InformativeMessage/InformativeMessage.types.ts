// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSObject } from "styled-components";

export interface InformativeMessageMain {
  title: React.ReactNode;
  message: React.ReactNode;
}

export interface InformativeConstructProps {
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}

export type InformativeMessageProps = InformativeMessageMain &
  InformativeConstructProps;
