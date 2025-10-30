// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import {
  ConstructExpandOptionsProps,
  ExpandOptionsButtonProps,
} from "./ExpandOptionsButton.types";
import CollapseCaret from "../Icons/CollapseCaret";
import ExpandCaret from "../Icons/ExpandCaret";
import { lightColors } from "../../global/themes";

const ExpandButtonBase = styled.button<ConstructExpandOptionsProps>(
  ({ sx, theme }) => ({
    display: "flex",
    cursor: "pointer",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 3,
    padding: 5,
    height: 10,
    fontSize: 10,
    border: "none",
    color: get(theme, "buttons.regular.enabled.text", lightColors.mainGrey),
    "& svg": {
      width: 16,
      height: 16,
    },
    "&:hover": {
      color: get(theme, "buttons.regular.hover.text", lightColors.mainGrey),
      backgroundColor: get(
        theme,
        "buttons.regular.hover.background",
        lightColors.hoverGrey,
      ),
    },
    "&:active": {
      color: get(theme, "buttons.regular.pressed.text", lightColors.mainGrey),
      backgroundColor: get(
        theme,
        "buttons.regular.pressed.background",
        lightColors.pressedGrey,
      ),
    },
    "&:disabled": {
      color: get(
        theme,
        "buttons.regular.disabled.text",
        lightColors.disabledInnerGrey,
      ),
      backgroundColor: "transparent",
      cursor: "not-allowed",
    },
    ...sx,
  }),
);

const ExpandOptionsButton: FC<
  ExpandOptionsButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ open, label, sx, ...props }) => {
  return (
    <ExpandButtonBase sx={sx} {...props}>
      {label}
      {open ? <CollapseCaret /> : <ExpandCaret />}
    </ExpandButtonBase>
  );
};

export default ExpandOptionsButton;
