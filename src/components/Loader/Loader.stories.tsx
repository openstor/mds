// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Loader from "./Loader";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Graphics/Loader",
  component: Loader,
  argTypes: {},
} as Meta<typeof Loader>;

const Template: Story = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Loader {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
