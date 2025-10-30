// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import ActionsList from "./ActionsList";
import { ActionsListProps } from "./ActionsList.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/ActionsList",
  component: ActionsList,
  argTypes: {},
} as Meta<typeof ActionsList>;

const Template: Story<ActionsListProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ActionsList {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Actions Panel Title",
  items: [
    {
      action: () => alert("Action clicked"),
      icon: <TestIcon />,
      label: "Test Action",
      tooltip: "Action tooltip",
      disabled: false,
    },
    {
      action: () => alert("you shouldn't see this"),
      icon: <TestIcon />,
      label: "Disabled Test Action",
      tooltip: "Disabled action tooltip",
      disabled: true,
    },
    {
      action: () => alert("No tooltip clicked"),
      icon: <TestIcon />,
      label: "No Tooltip",
      tooltip: "",
      disabled: false,
    },
  ],
};

export const TitleWithIcon = Template.bind({});
TitleWithIcon.args = {
  title: (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <TestIcon style={{ marginRight: 10 }} /> Custom Node Title
    </span>
  ),
  items: [
    {
      action: () => alert("Action clicked"),
      icon: <TestIcon />,
      label: "Test Action",
      tooltip: "Action tooltip",
      disabled: false,
    },
    {
      action: () => alert("you shouldn't see this"),
      icon: <TestIcon />,
      label: "Disabled Test Action",
      tooltip: "Disabled action tooltip",
      disabled: true,
    },
    {
      action: () => alert("No tooltip clicked"),
      icon: <TestIcon />,
      label: "No Tooltip",
      tooltip: "",
      disabled: false,
    },
  ],
};
