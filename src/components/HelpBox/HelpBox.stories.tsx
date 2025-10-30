// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import HelpBox from "./HelpBox";
import { HelpBoxProps } from "./HelpBox.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Information/HelpBox",
  component: HelpBox,
  argTypes: {},
} as Meta<typeof HelpBox>;

const Template: Story<HelpBoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <HelpBox {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  iconComponent: <TestIcon />,
  help: "This is the text that will be rendered for help",
  title: "Help Available for this page.",
};

export const NoHelpText = Template.bind({});
NoHelpText.args = {
  iconComponent: <TestIcon />,
  title: "Help Available for this page.",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Help Available for this page.",
};
