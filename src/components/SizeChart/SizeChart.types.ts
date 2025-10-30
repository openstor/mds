// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { CSSObject } from "styled-components";

export interface SizeChartMain {
  label: boolean;
  width?: string;
  height?: string;
}

export interface SizeChartConstructProps {
  usedBytes: number;
  totalBytes: number;
  chartLabel?: string;
  sx?: CSSObject;
}

export type SizeChartProps = SizeChartMain & SizeChartConstructProps;
