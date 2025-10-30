// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import PageHeader from "./PageHeader";
import { PageHeaderProps } from "./PageHeader.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/PageHeader",
  component: PageHeader,
  argTypes: {},
} as Meta<typeof PageHeader>;

const Template: Story<PageHeaderProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <PageHeader {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Just Label",
};

export const LabelAndSearch = Template.bind({});
LabelAndSearch.args = {
  label: "Label and Search",
  middleComponent: (
    <Fragment>
      <input
        type={"text"}
        id={"test"}
        style={{
          width: "500px",
          borderRadius: 3,
          height: 30,
          border: "#E5E5E5 1px solid",
        }}
      />
    </Fragment>
  ),
};

export const LabelAndActions = Template.bind({});
LabelAndActions.args = {
  label: "Label and Search",
  actions: (
    <Fragment>
      <Button id={"test1"} icon={<TestIcon />} />
      <Button id={"test2"} icon={<TestIcon />} />
      <Button id={"test3"} icon={<TestIcon />} />
      <Button id={"test4"} icon={<TestIcon />} />
      <Button id={"test5"} icon={<TestIcon />} />
    </Fragment>
  ),
};

export const LinkAsLabel = Template.bind({});
LinkAsLabel.args = {
  label: <a href={"#"}>&lt; Go Back</a>,
};

export const OtherComponents = Template.bind({});
OtherComponents.args = {
  label: <input type={"text"} />,
  middleComponent: "Just some Text",
  actions: <TestIcon />,
};

export const FullComponentsSet = Template.bind({});
FullComponentsSet.args = {
  label: "TestLabel",
  middleComponent: (
    <Fragment>
      <input
        type={"text"}
        id={"test"}
        style={{
          width: "500px",
          borderRadius: 3,
          height: 30,
          border: "#E5E5E5 1px solid",
        }}
      />
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"test1"} icon={<TestIcon />} />
      <Button id={"test2"} icon={<TestIcon />} />
      <Button id={"test3"} icon={<TestIcon />} />
      <Button id={"test4"} icon={<TestIcon />} />
      <Button id={"test5"} icon={<TestIcon />} />
    </Fragment>
  ),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Just Label",
  sx: {
    backgroundColor: "#008800",
  },
};
