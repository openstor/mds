// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { CSSObject } from "styled-components";

export interface MainProgressProps {
  variant?: "determinate" | "indeterminate";
  notificationLabel?: string;
  value?: number;
  maxValue?: number;
  progressLabel?: boolean;
}

export interface CommonProgressBar {
  sx?: CSSObject;
  color?: "blue" | "red" | "green" | "orange" | "grey";
  barHeight?: number;
  transparentBG?: boolean;
}

export type ProgressBarProps = MainProgressProps & CommonProgressBar;
