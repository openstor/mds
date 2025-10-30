// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";
import ReadBox from "./ReadBox";
import { ReadBoxProps } from "./ReadBox.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Box from "../Box/Box";
import Tooltip from "../Tooltip/Tooltip";
import TestIcon from "../../utils/TestIcon";
import FormLayout from "../FormLayout/FormLayout";

export default {
  title: "MDS/Forms/ReadBox",
  component: ReadBox,
  argTypes: {},
} as Meta<typeof ReadBox>;

const Template: Story<ReadBoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ReadBox {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </ReadBox>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const withLabel = Template.bind({});
withLabel.args = {
  label: "Share URL",
};

export const multiLine = Template.bind({});
multiLine.args = {
  label: "Share URL",
  multiLine: true,
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  multiLine: false,
  actionButton: (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "10px",
      }}
    >
      <Tooltip tooltip={"Demo Tooltip for element"} placement={"left"}>
        <TestIcon style={{ width: 20 }} />
      </Tooltip>
    </Box>
  ),
};
