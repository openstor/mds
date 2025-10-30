// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Button {...args} onClick={() => alert("You clicked me!")} />
    <br />
    <Button {...args}>With Children</Button>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
};

export const CallToAction = Template.bind({});
CallToAction.args = {
  disabled: false,
  label: "Call to Action",
  variant: "callAction",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: "Secondary",
  variant: "secondary",
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  label: "Text Button",
  variant: "text",
};

export const SubAction = Template.bind({});
SubAction.args = {
  disabled: false,
  label: "Text Button",
  variant: "subAction",
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
  icon: <TestIcon />,
};

export const CallToActionIcon = Template.bind({});
CallToActionIcon.args = {
  disabled: false,
  label: "Call to Action",
  variant: "callAction",
  icon: <TestIcon />,
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  disabled: false,
  label: "Secondary",
  variant: "secondary",
  icon: <TestIcon />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
  fullWidth: true,
  icon: <TestIcon />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  disabled: false,
  variant: "regular",
  icon: <TestIcon />,
};
