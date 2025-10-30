// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import { ActionButtonProps } from "./ActionsList.types";
import styled from "styled-components";
import get from "lodash/get";

const CustomButton = styled.button<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start",
  color: get(theme, "actionsList.optionsTextColor", "#5E5E5E"),
  width: "100%",
  height: 22,
  margin: 0,
  padding: "0 15px",
  fontSize: 14,
  fontWeight: "normal",
  whiteSpace: "nowrap",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "transparent",
    color: get(theme, "actionsList.optionsHoverTextColor", "#000"),
  },
  "& svg": {
    width: 11,
    marginRight: 8,
  },
  "&:disabled": {
    color: get(theme, "actionsList.disabledOptionsTextColor", "#EBEBEB"),
    cursor: "not-allowed",
  },
  "& .buttonIcon": {
    width: 11,
  },
}));

const ObjectActionButton: FC<ActionButtonProps> = ({
  icon,
  label,
  ...props
}) => {
  return (
    <CustomButton {...props}>
      {icon}
      {label}
    </CustomButton>
  );
};

export default ObjectActionButton;
