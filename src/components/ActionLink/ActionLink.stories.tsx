// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import ActionLink from "./ActionLink";
import { ActionLinkProps } from "./ActionLink.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/ActionLink",
  component: ActionLink,
  argTypes: {},
} as Meta<typeof ActionLink>;

const Template: Story<ActionLinkProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <span style={{ fontSize: 16 }}>
      Some Text that can be combined with an{" "}
      <ActionLink
        {...args}
        label={"Action Link"}
        onClick={() => alert("You clicked me!")}
      />
      , this text can continue after it.
    </span>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const LoadingLink = Template.bind({});
LoadingLink.args = {
  isLoading: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    backgroundColor: "#f87",
    color: "#fff",
  },
};
