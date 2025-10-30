// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { MainHeaderProps, SectionHeaderProps } from "../Menu.types";
import { lightColors } from "../../../global/themes";

const Header = styled.div<MainHeaderProps>(({ theme }) => ({
  borderBottom: `${get(
    theme,
    "menu.vertical.sectionDividerColor",
    lightColors.menuColorDivider,
  )} 1px solid`,
  margin: "30px 25px 0",
  paddingBottom: 5,
  userSelect: "none",
  "& > .labelHeader": {
    fontSize: 14,
    color: get(theme, "menu.vertical.sectionLabelColor", lightColors.white),
    paddingBottom: 6,
    display: "block",
  },
}));

const MenuSectionHeader: FC<SectionHeaderProps> = ({ label, divider }) => {
  return (
    <Header className={"menuHeader"} divider={divider}>
      <span className={"labelHeader"}>{label}</span>
    </Header>
  );
};

export default MenuSectionHeader;
