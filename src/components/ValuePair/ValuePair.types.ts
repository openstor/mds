// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}

export interface ValuePairCommon {
  direction?: "column" | "row";
  sx?: CSSObject;
}

export type ValuePairProps = ValuePairMain & ValuePairCommon;
