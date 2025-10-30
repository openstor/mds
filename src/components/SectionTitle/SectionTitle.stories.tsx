// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import SectionTitle from "./SectionTitle";
import { SectionTitleProps } from "./SectionTitle.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/SectionTitle",
  component: SectionTitle,
  argTypes: {},
} as Meta<typeof SectionTitle>;

const Template: Story<SectionTitleProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SectionTitle {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  icon: <TestIcon />,
  actions: (
    <Fragment>
      <Button id={"test1"}>An Action</Button>
    </Fragment>
  ),
  separator: true,
  children: "Some Title",
};

export const JustTitle = Template.bind({});
JustTitle.args = {
  separator: true,
  children: "Some Title",
};

export const NoActions = Template.bind({});
NoActions.args = {
  icon: <TestIcon />,
  separator: true,
  children: "Some Title",
};

export const NoSeparator = Template.bind({});
NoSeparator.args = {
  icon: <TestIcon />,
  separator: false,
  children: "Some Title",
};

export const TitleWithCustomStyles = Template.bind({});
TitleWithCustomStyles.args = {
  children: "Just a Title with custom styles",
  icon: <TestIcon />,
  separator: true,
  sx: {
    color: "#f09",
  },
};
