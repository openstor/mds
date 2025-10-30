// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { PageHeaderConstruct, PageHeaderProps } from "./PageHeader.types";
import Grid from "../Grid/Grid";
import { breakPoints } from "../../global/utils";

const ParentContainer = styled.div<
  PageHeaderConstruct & HTMLAttributes<HTMLDivElement>
>(({ theme, sx }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  minHeight: 83,
  backgroundColor: get(theme, `pageHeader.background`, "#fff"),
  left: 0,
  borderBottom: `1px solid ${get(theme, `pageHeader.border`, "#E5E5E5")}`,
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "center",
  [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
    "& > div": {
      margin: "4px 0",
      padding: "0 20px,",
    },
  },
  ...sx,
}));

const LabelContainer = styled.div<HTMLAttributes<HTMLDivElement>>(
  ({ theme }) => ({
    color: get(theme, `pageHeader.color`, "#000"),
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 20,
    display: "flex",
    flexGrow: 1,
    marginRight: 10,
    "& a": {
      color: get(theme, `pageHeader.color`, "#000"),
      textDecoration: "none",
    },
  }),
);

const MiddleContainer = styled.div<HTMLAttributes<HTMLDivElement>>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  margin: "0 10px",
}));

const ActionsContainer = styled.div<HTMLAttributes<HTMLDivElement>>(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 20,
  flexGrow: 1,
  marginLeft: 10,
  "& button": {
    marginLeft: 8,
  },
}));

const PageHeader: FC<PageHeaderProps> = ({
  label,
  middleComponent,
  actions,
  sx,
}) => {
  return (
    <ParentContainer sx={sx} className={"page-header"}>
      <Grid
        className={"page-header-label"}
        item
        xs={12}
        sm={12}
        md={middleComponent ? 4 : 6}
      >
        <LabelContainer>{label}</LabelContainer>
      </Grid>
      {middleComponent && (
        <Grid className={"page-header-middle"} item xs={12} sm={12} md={4}>
          <MiddleContainer>{middleComponent}</MiddleContainer>
        </Grid>
      )}
      <Grid
        className={"page-header-actions"}
        item
        xs={12}
        sm={12}
        md={middleComponent ? 4 : 6}
      >
        <ActionsContainer>{actions}</ActionsContainer>
      </Grid>
    </ParentContainer>
  );
};

export default PageHeader;
