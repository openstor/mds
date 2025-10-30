// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import MainContainer from "./MainContainer";
import { MainContainerProps } from "./MainContainer.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Box from "../Box/Box";
import Menu from "../Menu/Menu";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/MainContainer",
  component: MainContainer,
  argTypes: {},
} as Meta<typeof MainContainer>;

const Template: Story<MainContainerProps> = (args) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <MainContainer {...args} />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: <div>This is where menu goes</div>,
};

export const NoMenu = Template.bind({});

NoMenu.args = {
  children: <Box>This is a Block simulating the content box</Box>,
};

export const HorizontalMenu = Template.bind({});

HorizontalMenu.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: <div>This is where menu goes</div>,
  horizontal: true,
};

export const DisableMobileMode = Template.bind({});

DisableMobileMode.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: (
    <Menu
      isOpen={true}
      displayGroupTitles
      options={[
        {
          icon: <TestIcon />,
          path: "/testPath1",
          name: "Test 1",
          group: "Group 1",
          id: "test1",
          onClick: (path) => {
            console.log("Custom Click Action", path);
          },
        },
      ]}
      applicationLogo={{ applicationName: "console", subVariant: "AGPL" }}
      callPathAction={(path) => {
        alert(`Called Path "${path}"`);
      }}
      signOutAction={() => {
        alert("Sign Out!");
      }}
      collapseAction={() => {
        console.log("COLLAPSE!");
      }}
      horizontal={false}
      currentPath={"/testPath1"}
    />
  ),
  mobileModeAuto: false,
};
