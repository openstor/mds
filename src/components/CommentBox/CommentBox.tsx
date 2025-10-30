// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import {
  ExtraCommentProps,
  CommentBoxProps,
  CommentContainerProps,
} from "./CommentBox.types";
import HelpIcon from "../Icons/HelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";

const TextAreaBase = styled.textarea<CommentBoxProps & ExtraCommentProps>(
  ({ theme, error, originType }) => {
    let borderColor = get(theme, "inputBox.border", "#E2E2E2");
    let borderHover = get(theme, "inputBox.hoverBorder", "#000110");

    if (error && error !== "") {
      borderColor = get(theme, "inputBox.error", "#C51B3F");
      borderHover = get(theme, "inputBox.error", "#C51B3F");
    }

    return {
      fontFamily: "'Inter',sans-serif",
      width: "100%",
      resize: "none",
      padding: "16px 14px",
      color: get(theme, "inputBox.color", "#07193E"),
      fontSize: 13,
      fontWeight: 600,
      border: `${borderColor} 1px solid`,
      borderRadius: 3,
      outline: "none",
      transitionDuration: "0.1s",
      backgroundColor: get(theme, "inputBox.backgroundColor", "#fff"),
      "&:placeholder": {
        color: get(theme, "inputBox.placeholderColor", "#858585"),
        opacity: 1,
        fontWeight: 400,
      },
      "&:hover": {
        borderColor: borderHover,
      },
      "&:focus": {
        borderColor: borderHover,
      },
      "&:disabled": {
        border: get(theme, "inputBox.disabledBorder", "#494A4D"),
        backgroundColor: get(theme, "inputBox.disabledBackground", "#B4B4B4"),
        color: get(theme, "inputBox.disabledText", "#E6EBEB"),
        "&:placeholder": {
          color: get(theme, "inputBox.disabledPlaceholder", "#E6EBEB"),
        },
      },
    };
  },
);

const BoxContainer = styled.div<CommentContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    alignItems: "flex-start",
    flexGrow: 1,
    width: "100%",
    "& .errorText": {
      fontSize: 12,
      color: get(theme, "inputBox.error", "#C51B3F"),
      marginTop: 3,
    },
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    ...sx,
  }),
);

const InputBox: FC<CommentBoxProps> = ({
  id,
  tooltip = "",
  index,
  noLabelMinWidth,
  label = "",
  required,
  className,
  error,
  sx,
  helpTip,
  helpTipPlacement,
  ...props
}) => {
  return (
    <BoxContainer
      error={!!error && error !== ""}
      sx={sx}
      className={`inputItem ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <HelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}

      <Box className={"textBoxContainer"}>
        <TextAreaBase
          id={id}
          fullWidth
          error={error}
          className={"inputRebase"}
          data-index={index}
          rows={5}
          {...props}
        />
        {error !== "" && <Box className={"errorText"}>{error}</Box>}
      </Box>
    </BoxContainer>
  );
};

export default InputBox;
