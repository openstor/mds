// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import {
  InformativeConstructProps,
  InformativeMessageProps,
} from "./InformativeMessage.types";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const InformativeMessageMain = styled.div<InformativeConstructProps>(
  ({ theme, sx, variant }) => ({
    backgroundColor: get(
      theme,
      `informativeMessage.${variant}.backgroundColor`,
      lightColors.mainBlue,
    ),
    border: `1px solid ${get(
      theme,
      `informativeMessage.${variant}.borderColor`,
      lightColors.mainBlue,
    )}`,
    borderRadius: 3,
    padding: "10px 20px",
    "& .labelHeadline": {
      color: get(
        theme,
        `informativeMessage.${variant}.textColor`,
        lightColors.white,
      ),
      fontSize: 14,
      fontWeight: "bold",
      marginBottom: 10,
    },
    "& .messageText": {
      color: get(
        theme,
        `informativeMessage.${variant}.textColor`,
        lightColors.white,
      ),
      fontSize: 14,
    },
    ...sx,
  }),
);

const InformativeMessage: FC<InformativeMessageProps> = ({
  title,
  message,
  sx,
  variant = "default",
  ...props
}) => {
  return (
    <InformativeMessageMain
      sx={sx}
      variant={variant}
      className={`informative-message`}
    >
      <div className={"labelHeadline"}>{title}</div>
      <div className={"messageText"}>{message}</div>
    </InformativeMessageMain>
  );
};

export default InformativeMessage;
