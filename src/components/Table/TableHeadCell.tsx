// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { cloneElement, createElement, FC } from "react";
import styled from "styled-components";
import { TableComponentsExtraProps } from "./Table.types";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const TableHeadCellMain = styled.th<TableComponentsExtraProps>(
  ({ theme, sx }) => ({
    fontFamily: "'Inter',sans-serif",
    fontSize: 12,
    lineHeight: 1.43,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: `2px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
    textAlign: "left",
    padding: 16,
    fontWeight: "bold",
    color: get(theme, "secondaryText", lightColors.mainGrey),
    ...sx,
  }),
);

const TableHeadCell: FC<
  TableComponentsExtraProps & React.ThHTMLAttributes<HTMLTableHeaderCellElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableHeadCellMain sx={sx} {...restProps}>
      {children}
    </TableHeadCellMain>
  );
};

export default TableHeadCell;
