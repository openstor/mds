// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { BoxProps } from "./Box.types";

const BoxParent = styled.div<HTMLAttributes<HTMLDivElement> & BoxProps>(
  ({ theme, sx, withBorders, customBorderPadding, useBackground }) => {
    let extraBorders = {};

    if (withBorders) {
      extraBorders = {
        border: `${get(theme, "borderColor", "#eaeaea")} 1px solid`,
        borderRadius: 2,
        padding: customBorderPadding || 15,
      };
    }

    return {
      backgroundColor: useBackground
        ? get(theme, "boxBackground", "#FBFAFA")
        : "transparent",
      ...extraBorders,
      ...sx,
    };
  },
);

const Box: FC<HTMLAttributes<HTMLDivElement> & BoxProps> = ({
  sx,
  children,
  customBorderPadding,
  ...props
}) => {
  return (
    <BoxParent {...props} sx={sx} customBorderPadding={customBorderPadding}>
      {children}
    </BoxParent>
  );
};

export default Box;
