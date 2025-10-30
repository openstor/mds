// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Checkbox from "./Checkbox";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { CheckboxProps } from "./Checkbox.types";

export default {
  title: "MDS/Forms/Checkbox",
  component: Checkbox,
  argTypes: {},
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Checkbox {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  checked: true,
  disabled: true,
};
