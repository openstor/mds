// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { CSSObject } from "styled-components";

export interface BadgeMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  badgeContent?: number;
}

export interface BadgeConstruct {
  horizontalPosition?: "left" | "right";
  verticalPosition?: "bottom" | "top";
  sx?: CSSObject;
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  shape?: "circular" | "rectangular";
  dotOnly?: boolean;
}

export type BadgeProps = BadgeMain & BadgeConstruct;
