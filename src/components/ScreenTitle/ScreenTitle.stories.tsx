// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import ScreenTitle from "./ScreenTitle";
import { ScreenTitleProps } from "./ScreenTitle.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/ScreenTitle",
  component: ScreenTitle,
  argTypes: {},
} as Meta<typeof ScreenTitle>;

const Template: Story<ScreenTitleProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ScreenTitle {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
};

export const NoBottomBorder = Template.bind({});
NoBottomBorder.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  bottomBorder: false,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  sx: {
    backgroundColor: "#090",
    "& .headerBarSubheader": {
      color: "#ff0",
    },
    "& .headerBarIcon .min-icon": {
      fill: "#fff",
    },
  },
};
