// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import FormLayout from "./FormLayout";
import { FormLayoutProps } from "./FormLayout.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Checkbox from "../Checkbox/Checkbox";
import TestIcon from "../../utils/TestIcon";
import HelpBox from "../HelpBox/HelpBox";
import InputBox from "../InputBox/InputBox";

export default {
  title: "MDS/Layout/FormLayout",
  component: FormLayout,
  argTypes: {},
} as Meta<typeof FormLayout>;

const Template: Story<FormLayoutProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <FormLayout {...args} title={"Form Title"} icon={<TestIcon />}>
      <Checkbox label={"A Checkbox input"} />
      <InputBox id={"inputbox"} label={"An input box"} />
    </FormLayout>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithHelpBox = Template.bind({});
WithHelpBox.args = {
  helpBox: (
    <HelpBox
      iconComponent={<TestIcon />}
      title={"Help Title"}
      help={"Help Text"}
    />
  ),
};

export const FormLayoutWithCustomStyles = Template.bind({});
FormLayoutWithCustomStyles.args = {
  sx: {
    color: "#fff",
    backgroundColor: "#460",
    borderColor: "#f9a",
  },
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  withBorders: false,
  helpBox: (
    <HelpBox
      iconComponent={<TestIcon />}
      title={"Help Title"}
      help={"Help Text"}
    />
  ),
};

export const NoBorderAndPadding = Template.bind({});
NoBorderAndPadding.args = {
  withBorders: false,
  containerPadding: false,
  helpBox: (
    <HelpBox
      iconComponent={<TestIcon />}
      title={"Help Title"}
      help={"Help Text"}
    />
  ),
};
