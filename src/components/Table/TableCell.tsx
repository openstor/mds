// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { TableComponentsExtraProps } from "./Table.types";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const TableCellMain = styled.td<TableComponentsExtraProps>(({ theme, sx }) => ({
  fontFamily: "'Inter',sans-serif",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 1.43,
  display: "table-cell",
  verticalAlign: "inherit",
  borderBottom: `1px solid ${get(
    theme,
    "borderColor",
    lightColors.borderColor,
  )}`,
  textAlign: "left",
  padding: 16,
  color: get(theme, "secondaryText", lightColors.mainGrey),
  ...sx,
}));

const TableCell: FC<
  TableComponentsExtraProps & React.TdHTMLAttributes<HTMLTableDataCellElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableCellMain sx={sx} {...restProps}>
      {children}
    </TableCellMain>
  );
};

export default TableCell;
