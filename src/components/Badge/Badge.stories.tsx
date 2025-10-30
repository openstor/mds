// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import DownloadIcon from "../Icons/DownloadIcon";

export default {
  title: "MDS/Information/Badge",
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Badge {...args} onClick={() => alert("You clicked me!")}>
      <DownloadIcon />
    </Badge>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  badgeContent: 5,
};

export const DotOnly = Template.bind({});
DotOnly.args = {
  badgeContent: 5,
  dotOnly: true,
};

export const Warn = Template.bind({});
Warn.args = { badgeContent: 5, color: "warn" };

export const Secondary = Template.bind({});
Secondary.args = {
  badgeContent: 5,
  color: "secondary",
};

export const Alert = Template.bind({});
Alert.args = {
  badgeContent: 5,
  color: "alert",
};

export const Ok = Template.bind({});
Ok.args = {
  badgeContent: 5,
  color: "ok",
};

export const Grey = Template.bind({});
Grey.args = {
  badgeContent: 5,
  color: "grey",
};
