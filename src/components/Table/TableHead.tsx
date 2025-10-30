// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { TableComponentsExtraProps } from "./Table.types";

const TableHeadMain = styled.thead<TableComponentsExtraProps>(
  ({ theme, sx }) => ({
    display: "table-row-group",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    ...sx,
  }),
);

const TableHead: FC<
  TableComponentsExtraProps & React.HTMLAttributes<HTMLTableSectionElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableHeadMain sx={sx} {...restProps}>
      {children}
    </TableHeadMain>
  );
};

export default TableHead;
