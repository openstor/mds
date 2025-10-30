// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { TableComponentsExtraProps } from "./Table.types";

const TableMain = styled.table<TableComponentsExtraProps>(({ theme, sx }) => ({
  display: "table",
  width: "100%",
  borderCollapse: "collapse",
  borderSpacing: 0,
  ...sx,
}));

const Table: FC<
  TableComponentsExtraProps & React.TableHTMLAttributes<HTMLTableElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableMain sx={sx} {...restProps}>
      {children}
    </TableMain>
  );
};

export default Table;
