// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: ReactNode;
}

export interface TagConstructProps {
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  sx?: CSSObject;
  variant?: "regular" | "outlined";
  square?: boolean;
}

export type TagProps = TagMainProps & TagConstructProps;
