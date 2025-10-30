// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import Link from "./Link";
import { LinkProps } from "./Link.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/Link",
  component: Link,
  argTypes: {},
} as Meta<typeof Link>;

const Template: Story<LinkProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <span style={{ fontSize: 16 }}>
      We can have a{" "}
      <Link {...args} target={"_blank"} href={"https://min.io"}>
        Link
      </Link>
      , to point to another page.
    </span>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    backgroundColor: "#f87",
    color: "#fff",
  },
};
