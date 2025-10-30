// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import BackLink from "./BackLink";
import { BackLinkProps } from "./BackLink.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Layout/BackLink",
  component: BackLink,
  argTypes: {},
} as Meta<typeof BackLink>;

const Template: Story<BackLinkProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <BackLink {...args} onClick={() => alert("You clicked me!")} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Click here to go back",
};
