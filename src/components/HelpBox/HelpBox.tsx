// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { HelpBoxProps } from "./HelpBox.types";
import Grid from "../Grid/Grid";

const BaseHelpBox = styled.div(({ theme }) => ({
  border: `1px solid ${get(theme, "borderColor", "#E2E2E2")}`,
  borderRadius: 2,
  backgroundColor: get(theme, "boxBackground", "#FBFAFA"),
  paddingLeft: 25,
  paddingTop: 20,
  paddingBottom: 20,
  paddingRight: 30,
  "& .leftItems": {
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    "& .min-icon": {
      marginRight: 15,
      height: 28,
      width: 38,
    },
  },
  "& .helpText": {
    fontSize: 16,
    paddingLeft: 5,
    marginTop: 15,
  },
}));

const HelpBox: FC<HelpBoxProps> = ({ iconComponent, title, help }) => {
  return (
    <BaseHelpBox className={"helpbox-container"}>
      <Grid container>
        <Grid item xs={12} className={"leftItems"}>
          {iconComponent || null}
          {title}
        </Grid>
        {help && (
          <Grid item xs={12} className={"helpText"}>
            {help}
          </Grid>
        )}
      </Grid>
    </BaseHelpBox>
  );
};

export default HelpBox;
