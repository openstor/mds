// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import CommentBox from "./CommentBox";
import { CommentBoxProps } from "./CommentBox.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";

export default {
  title: "MDS/Forms/CommentBox",
  component: CommentBox,
  argTypes: {},
} as Meta<typeof CommentBox>;

const Template: Story<CommentBoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <FormLayout>
      <CommentBox {...args} />
    </FormLayout>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "A Comment Box",
  required: true,
  placeholder: "A Placeholder",
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: "A Comment Box",
  required: true,
  disabled: true,
  value: "Demo Text",
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "Input with Error",
  required: true,
  error: "This is an error message",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "A Comment Box",
  required: true,
  tooltip: "Tooltip text",
};
