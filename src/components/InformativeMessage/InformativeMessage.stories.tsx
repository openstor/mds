// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import InformativeMessage from "./InformativeMessage";
import { InformativeMessageProps } from "./InformativeMessage.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/InformativeMessage",
  component: InformativeMessage,
  argTypes: {},
} as Meta<typeof InformativeMessage>;

const Template: Story<InformativeMessageProps> = ({ ...props }) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <InformativeMessage {...props} />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  title: "This is the title for a message",
  message: "This is the content for an informative message",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  title: "This is the title for a message",
  message: "This is the content for a success message",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  title: "This is the title for a message",
  message: "This is the content for an warning message",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  title: "This is the title for a message",
  message: "This is the content for an error message",
};
