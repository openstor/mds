// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { TableComponentsExtraProps } from "./Table.types";
import { lightColors } from "../../global/themes";

const TableRowMain = styled.tr<TableComponentsExtraProps>(({ theme, sx }) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  outline: 0,
  cursor: "pointer",
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: get(theme, "bgColor", lightColors.white),
  ...sx,
}));

const TableRow: FC<
  TableComponentsExtraProps & React.HTMLAttributes<HTMLTableRowElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableRowMain sx={sx} {...restProps}>
      {children}
    </TableRowMain>
  );
};

export default TableRow;
