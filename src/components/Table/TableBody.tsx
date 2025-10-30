// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { TableComponentsExtraProps } from "./Table.types";

const TableBodyMain = styled.tbody<TableComponentsExtraProps>(
  ({ theme, sx }) => ({
    display: "table-row-group",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    ...sx,
  }),
);

const TableBody: FC<
  TableComponentsExtraProps & React.HTMLAttributes<HTMLTableSectionElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableBodyMain sx={sx} {...restProps}>
      {children}
    </TableBodyMain>
  );
};

export default TableBody;
