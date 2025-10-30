// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";

export type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";

export interface HelpTipProps {
  children: any;
  content: React.ReactNode;
  errorProps?: any;
  placement?: CommonHelpTipPlacement;
}

export interface HelpTipBuild {
  placement: CommonHelpTipPlacement;
}

export interface HelpTipConstructProps {
  placement: CommonHelpTipPlacement;
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
