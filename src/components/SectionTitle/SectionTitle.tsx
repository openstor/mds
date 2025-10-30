// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import Grid from "../Grid/Grid";
import { SectionTitleProps } from "./SectionTitle.types";
import styled from "styled-components";
import get from "lodash/get";

const SectionParent = styled.div<
  HTMLAttributes<HTMLDivElement> & SectionTitleProps
>(({ theme, separator, sx }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  borderBottom: separator
    ? `1px solid ${get(theme, "borderColor", "#eaeaea")}`
    : "",
  gap: "10px",
  ...sx,
}));

const SectionTitle: FC<SectionTitleProps> = ({
  separator,
  icon,
  children,
  actions,
  sx,
}) => {
  return (
    <SectionParent
      className={"sectionTitle-container"}
      separator={separator}
      sx={sx}
    >
      <Grid
        item
        xs
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: "10px",
          "& svg": { marginRight: "10px" },
        }}
      >
        {icon}
        <h3>{children}</h3>
      </Grid>
      {actions && (
        <Grid
          item
          xs
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          {" "}
          {actions}
        </Grid>
      )}
    </SectionParent>
  );
};

export default SectionTitle;
