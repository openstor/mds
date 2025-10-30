// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import ApplicationLogo from "./ApplicationLogo";
import { ApplicationLogoProps } from "./ApplicationLogo.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Graphics/ApplicationLogo",
  component: ApplicationLogo,
  argTypes: {},
} as Meta<typeof ApplicationLogo>;

const Template: Story<ApplicationLogoProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <div style={{ maxWidth: "200px" }}>
      <ApplicationLogo {...args} />
    </div>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  applicationName: "console",
};
