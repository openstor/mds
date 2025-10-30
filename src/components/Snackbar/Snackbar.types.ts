// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface SnackbarMainProps {
  autoHideDuration?: number;
  message?: ReactNode;
  onClose: () => void;
  closeButton?: boolean;
  mode?: "inline" | "portal";
}

export interface SnackbarConstructProps {
  open: boolean;
  condensed?: boolean;
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}

export interface SnackbarButtonProps {
  variant: "default" | "success" | "warning" | "error";
  condensed: boolean;
}

export type SnackbarProps = SnackbarMainProps & SnackbarConstructProps;
