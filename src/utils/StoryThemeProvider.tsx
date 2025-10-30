// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useEffect, useState } from "react";
import { addons } from "@storybook/preview-api";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import ThemeHandler from "../components/ThemeHandler/ThemeHandler";

interface IStoryThemeProvider {
  children: React.ReactNode;
}

const channel = addons.getChannel();

const StoryThemeProvider = ({ children }: IStoryThemeProvider) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
  }, []);

  return <ThemeHandler darkMode={isDark}>{children}</ThemeHandler>;
};

export default StoryThemeProvider;
