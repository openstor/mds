// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSObject } from "styled-components";

export interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React.ReactNode;
  backgroundOverlay?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}

export interface ModalBoxContainerProps {
  backgroundOverlay?: boolean;
  widthLimit?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}
