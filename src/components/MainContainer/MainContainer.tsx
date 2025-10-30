// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { cloneElement, FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import {
  CustomMainProps,
  MainContainerProps,
  ParentBoxProps,
} from "./MainContainer.types";
import { breakPoints } from "../../global/utils";

const CustomMain = styled.main<CustomMainProps>(({ theme, horizontal }) => {
  return {
    flexGrow: 1,
    height: !!horizontal ? "initial" : "100vh",
    overflow: "auto",
    position: "relative",
    backgroundColor: get(theme, "bgColor", "#fff"),
    color: get(theme, "fontColor", "#000"),
  };
});

const ParentBox = styled.div<ParentBoxProps>(
  ({ horizontal, mobileModeAuto, sx }) => {
    let breakPoint = {};

    if (mobileModeAuto) {
      breakPoint = {
        [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
          flexDirection: "column",
        },
      };
    }

    return {
      display: "flex",
      flexDirection: !!horizontal ? "column" : "row",
      ...breakPoint,
      ...sx,
    };
  },
);

const MainContainer: FC<MainContainerProps> = ({
  children,
  menu,
  horizontal,
  mobileModeAuto = true,
  sx,
}) => {
  return (
    <ParentBox
      className={"parentBox"}
      horizontal={horizontal}
      mobileModeAuto={mobileModeAuto}
      sx={sx}
    >
      {menu && cloneElement(menu)}
      <CustomMain horizontal={horizontal} className={"mainPage"}>
        {children}
      </CustomMain>
    </ParentBox>
  );
};

export default MainContainer;
