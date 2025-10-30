// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import InputLabel from "./InputLabel";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { InputLabelProps } from "./InputLabel.types";

export default {
  title: "MDS/Forms/InputLabel",
  component: InputLabel,
  argTypes: {},
} as Meta<typeof InputLabel>;

const Template: Story<InputLabelProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <InputLabel {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "A label",
};

export const NoMinWidth = Template.bind({});
NoMinWidth.args = {
  children: "A label",
  noMinWidth: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  children: "A label",
  sx: {
    color: "#FFF",
    "& span": {
      backgroundColor: "#000",
    },
  },
};
