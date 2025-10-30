// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { MenuConstructProps, MenuProps } from "../Menu.types";
import Box from "../../Box/Box";
import ApplicationLogo from "../../ApplicationLogo/ApplicationLogo";
import CollapseIcon from "../../Icons/CollapseIcon";
import IconButton from "../../IconButton/IconButton";
import MobileMenuList from "./MobileMenuList";
import { createPortal } from "react-dom";
import { lightColors } from "../../../global/themes";

const MobileMenuContainer = styled.div<MenuConstructProps>(({ theme, sx }) => {
  return {
    "& .headerBar": {
      padding: 15,
      display: "flex",
      justifyContent: "space-between",
      background: get(
        theme,
        "menu.horizontal.menuHeaderBackground",
        lightColors.menuBackground,
      ),
      alignItems: "center",
      "& svg": {
        width: 150,
      },
    },
    "& .sections": {
      backgroundColor: "#ff0",
      width: "100%",
      height: 45,
      display: "flex",
      overflowY: "hidden",
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    ...sx,
  };
});

const MobileMenu: FC<MenuProps> = ({
  applicationLogo,
  options,
  displayGroupTitles,
  signOutAction,
  callPathAction,
  horizontal,
  currentPath,
  endComponent,
  sx,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <MobileMenuContainer className={"menuBox"} sx={sx}>
        <Box className={"headerBar"}>
          <ApplicationLogo inverse {...applicationLogo} />
          <IconButton
            id={"menu-open"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <CollapseIcon />
          </IconButton>
        </Box>
        {horizontal && <Box>middleComponent</Box>}
        <Box className={"menuOpen"}></Box>
      </MobileMenuContainer>
      {open &&
        createPortal(
          <MobileMenuList
            options={options}
            applicationLogo={applicationLogo}
            callPathAction={callPathAction}
            isOpen={open}
            collapseAction={() => {
              setOpen(false);
            }}
            signOutAction={signOutAction}
            displayGroupTitles={displayGroupTitles}
            currentPath={currentPath}
            endComponent={endComponent}
          />,
          document.body,
        )}
    </Fragment>
  );
};

export default MobileMenu;
