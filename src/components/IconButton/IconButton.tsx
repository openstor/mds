// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { IconButtonProps } from "./IconButton.types";

const CustomIconButton = styled.button<IconButtonProps>(({ theme, size }) => {
  let buttonSize: number | string = 30;

  if (size) {
    if (typeof size === "string") {
      switch (size) {
        case "small":
          buttonSize = 28;
          break;
        case "medium":
          buttonSize = 30;
          break;
        case "large":
          buttonSize = 48;
          break;
        default:
          buttonSize = size;
      }
    }
  }
  return {
    width: buttonSize,
    height: buttonSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: 0,
    position: "relative",
    cursor: "pointer",
    transitionDuration: "0.2s",
    backgroundColor: get(theme, `iconButton.buttonBG`, "#000"),
    "& svg": {
      fill: get(theme, `iconButton.color`, "#000"),
      margin: "calc(25% - 2px)",
    },
    "&:hover:not(:disabled)": {
      backgroundColor: get(theme, `iconButton.hoverBG`, "#000"),
    },
    "&:active:not(:disabled)": {
      backgroundColor: get(theme, `iconButton.activeBG`, "#000"),
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: get(theme, `iconButton.disabledBG`, "#000"),
    },
  };
});

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <CustomIconButton {...props}>{children}</CustomIconButton>;
};

export default IconButton;
