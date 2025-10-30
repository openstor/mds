// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { MainHeaderProps } from "../Menu.types";
import get from "lodash/get";
import { lightColors } from "../../../global/themes";

const Divider = styled.hr<MainHeaderProps>(({ theme }) => ({
  borderBottom: `${get(
    theme,
    "menu.vertical.sectionDividerColor",
    lightColors.menuColorDivider,
  )} 1px solid`,
  margin: "0 25px 0" as const,
}));

const MenuDivider: FC = () => {
  return <Divider />;
};

export default MenuDivider;
