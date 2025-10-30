// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { CSSObject } from "styled-components";

export interface MainContainerProps {
  menu?: React.ReactElement;
  children: React.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
  sx?: CSSObject;
}

export interface ParentBoxProps {
  horizontal?: boolean;
  mobileModeAuto: boolean;
  sx?: CSSObject;
}

export interface CustomMainProps {
  horizontal?: boolean;
}
