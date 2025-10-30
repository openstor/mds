// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import {
  ScreenTitleContainerProps,
  ScreenTitleProps,
} from "./ScreenTitle.types";
import { breakPoints } from "../../global/utils";
import styled from "styled-components";
import Box from "../Box/Box";
import get from "lodash/get";

const ScreenTitleContainer = styled.div<ScreenTitleContainerProps>(
  ({ theme, sx, bottomBorder }) => ({
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    "& .stContainer": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 8,
      width: "100%",
      borderBottom: !bottomBorder
        ? "none"
        : `1px solid ${get(theme, `screenTitle.border`, "#E5E5E5")}`,
    },
    "& .headerBarIcon": {
      color: get(theme, `screenTitle.iconColor`, "#000"),
      "& .min-icon": {
        width: 44,
        height: 44,
      },
    },
    "& .headerBarSubheader": {
      color: get(theme, `screenTitle.subtitleColor`, "#5B5C5C"),
    },
    "& .titleColumn": {
      height: "auto",
      justifyContent: "center",
      display: "flex",
      flexFlow: "column",
      alignItems: "flex-start",
      "& h1": {
        fontSize: 20,
      },
    },
    "& .leftItems": {
      display: "flex",
      alignItems: "center",
      gap: 12,
    },
    "& .rightItems": {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
      "& .stContainer": {
        flexDirection: "column",
        gap: 12,
        flexFlow: "column",
        alignItems: "flex-start",
      },
      "& .headerBarIcon": { display: "none" },
      "& .headerBarSubheader": {
        display: "flex",
        flexDirection: "column",
      },
      "& .rightItems": {
        width: "100%",
        justifyContent: "center",
      },
    },
    ...sx,
  }),
);

const ScreenTitle: FC<ScreenTitleProps> = ({
  icon,
  subTitle = "",
  title,
  actions,
  bottomBorder = true,
  sx,
}) => {
  return (
    <ScreenTitleContainer
      className={"screenTitle-container"}
      sx={sx}
      bottomBorder={bottomBorder}
    >
      <Box className={"stContainer"}>
        <Box className={"leftItems"}>
          {icon ? <Box className={"headerBarIcon"}>{icon}</Box> : null}
          <Box className={"titleColumn"}>
            <h1 style={{ margin: 0 }}>{title}</h1>
            <span className={"headerBarSubheader"}>{subTitle}</span>
          </Box>
        </Box>
        <Box className={"rightItems"}>{actions}</Box>
      </Box>
    </ScreenTitleContainer>
  );
};

export default ScreenTitle;
