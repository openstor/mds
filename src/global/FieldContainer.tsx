// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import { breakPoints } from "./utils";
import styled, { CSSObject } from "styled-components";

export interface FieldContainerProps {
  children: React.ReactNode;
  className?: string;
  sx?: CSSObject;
}

const MainContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & FieldContainerProps
>(({ sx }) => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flexBasis: "100%",
  [`@media (max-width: ${breakPoints.sm})`]: {
    flexFlow: "column",
  },
  "& .tooltipContainer": {
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
    "& .min-icon": {
      width: 13,
    },
  },
  ...sx,
}));

export const FieldContainer: FC<FieldContainerProps> = ({
  children,
  sx,
  className,
}) => {
  return (
    <MainContainer sx={sx} className={className}>
      {children}
    </MainContainer>
  );
};

export default FieldContainer;
