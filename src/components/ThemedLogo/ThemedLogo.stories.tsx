// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";
import ThemedLogo from "./ThemedLogo";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Graphics/ThemedLogo",
  component: ThemedLogo,
  argTypes: {},
} as Meta<typeof ThemedLogo>;

const Template: Story = () => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ThemedLogo />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
