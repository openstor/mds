// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import { ThemeHandlerProps } from "./ThemeHandler.types";
import { darkTheme, lightTheme } from "../../global/themes";
import { ThemeProvider } from "styled-components";
import { ThemeDefinitionProps } from "../../global/global.types";

const ThemeHandler: FC<ThemeHandlerProps> = ({
  darkMode = false,
  children,
  customTheme,
}) => {
  let selectedTheme: ThemeDefinitionProps = darkMode ? darkTheme : lightTheme;

  if (customTheme) {
    selectedTheme = customTheme;
  }

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default ThemeHandler;
