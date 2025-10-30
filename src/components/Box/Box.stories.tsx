// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Box from "./Box";
import { BoxProps } from "./Box.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Layout/Box",
  component: Box,
  argTypes: {},
} as Meta<typeof Box>;

const Template: Story<BoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Box {...args}>Box Content</Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithBorder = Template.bind({});
WithBorder.args = {
  withBorders: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  withBorders: true,
  useBackground: true,
};

export const WithCustomBorderPadding = Template.bind({});
WithCustomBorderPadding.args = {
  withBorders: true,
  customBorderPadding: "5px 100px",
};

export const BoxWithCustomStyles = Template.bind({});
BoxWithCustomStyles.args = {
  withBorders: true,
  sx: {
    color: "#fff",
    backgroundColor: "#460",
    borderColor: "#f9a",
  },
};
