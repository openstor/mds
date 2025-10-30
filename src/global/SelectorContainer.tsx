// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";

const SelectorContainerMain = styled.div(({}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "transparent",
  zIndex: 5000,
  overscrollBehavior: "contain",
}));

const SelectorContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <SelectorContainerMain {...restProps}>{children}</SelectorContainerMain>
  );
};

export default SelectorContainer;
