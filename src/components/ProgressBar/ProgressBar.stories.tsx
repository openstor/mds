// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ProgressBar {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: 30,
  variant: "determinate",
};

export const WithProgressLabel = Template.bind({});
WithProgressLabel.args = {
  value: 30,
  variant: "determinate",
  progressLabel: true,
};

export const NotificationLabel = Template.bind({});
NotificationLabel.args = {
  value: 30,
  variant: "determinate",
  progressLabel: true,
  notificationLabel:
    "This notification label will change it's color depending on the color state",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: "indeterminate",
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  variant: "indeterminate",
  barHeight: 3,
};

export const TransparentBackground = Template.bind({});
TransparentBackground.args = {
  variant: "indeterminate",
  barHeight: 5,
  transparentBG: true,
};
