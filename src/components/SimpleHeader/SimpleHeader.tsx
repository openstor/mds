// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import {
  SimpleHeaderContainerProps,
  SimpleHeaderProps,
} from "./SimpleHeader.types";
import get from "lodash/get";

const ParentContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & SimpleHeaderContainerProps
>(({ theme, sx }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: 15,
  borderBottom: `1px solid ${get(theme, `borderColor`, "#E5E5E5")}`,
  fontWeight: "bold",
  fontSize: 18,
  color: get(theme, `fontColor`, "#000"),
  margin: "20px 22px",
  ...sx,
}));

const SimpleHeader: FC<SimpleHeaderProps> = ({ label, icon, sx }) => {
  return (
    <ParentContainer className={"simpleHeader-container"} sx={sx}>
      <span>{label}</span>
      {icon}
    </ParentContainer>
  );
};

export default SimpleHeader;
