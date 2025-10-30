// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import IconButton from "./IconButton";
import { IconButtonProps } from "./IconButton.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import DownloadIcon from "../Icons/DownloadIcon";

export default {
  title: "MDS/Forms/IconButton",
  component: IconButton,
  argTypes: {},
} as Meta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <IconButton {...args} onClick={() => alert("You clicked me!")}>
      <DownloadIcon />
    </IconButton>
  </StoryThemeProvider>
);

export const SmallButton = Template.bind({});
SmallButton.args = {
  disabled: false,
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  disabled: false,
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  disabled: false,
  size: "large",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  disabled: false,
  size: "100px",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
