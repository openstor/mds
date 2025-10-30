// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { InputLabelProps } from "./InputLabel.types";
import HelpTip from "../HelpTip/HelpTip";

const CustomLabel = styled.label<InputLabelProps>(({ theme, sx }) => ({
  fontWeight: 600,
  marginRight: 10,
  fontSize: 14,
  color: get(theme, "commonInput.labelColor", "#07193E"),
  textAlign: "left" as const,
  alignItems: "center",
  display: "flex",
  userSelect: "none",
  whiteSpace: "nowrap",
  "& > span": {
    display: "flex",
    alignItems: "center",
    minWidth: 160,
    "&.noMinWidthLabel": {
      minWidth: "initial",
    },
  },
  ...sx,
}));

const InputLabel: FC<InputLabelProps> = ({
  children,
  sx,
  noMinWidth,
  htmlFor,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  return (
    <CustomLabel sx={sx} htmlFor={htmlFor} {...props}>
      <span className={`${noMinWidth ? "noMinWidthLabel" : ""}`}>
        {helpTip ? (
          <HelpTip placement={helpTipPlacement} content={helpTip}>
            {children}
          </HelpTip>
        ) : (
          children
        )}
      </span>
    </CustomLabel>
  );
};

export default InputLabel;
