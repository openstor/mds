// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  sx?: CSSObject;
}

export interface AccordionMainProps {
  sx?: CSSObject;
}

export interface AccordionContentProps {
  expanded: boolean;
}
