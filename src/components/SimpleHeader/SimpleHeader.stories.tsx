// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import SimpleHeader from "./SimpleHeader";
import { SimpleHeaderProps } from "./SimpleHeader.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/SimpleHeader",
  component: SimpleHeader,
  argTypes: {},
} as Meta<typeof SimpleHeader>;

const Template: Story<SimpleHeaderProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SimpleHeader {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Simple Header",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Simple Header",
  icon: <TestIcon />,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Label and Search",
  icon: <TestIcon />,
  sx: {
    borderBottom: "#0f0 1px solid",
    color: "#f0f",
  },
};
