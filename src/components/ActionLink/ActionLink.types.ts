// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { CSSObject } from "styled-components";

export interface CommonActionLinkProps {
  isLoading?: boolean;
  label?: any;
}

export interface BaseActionLinkProps {
  sx?: CSSObject;
}

export type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;
