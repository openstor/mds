// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import SizeChart from "./SizeChart";
import { SizeChartProps } from "./SizeChart.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Data/SizeChart",
  component: SizeChart,
  argTypes: {},
} as Meta<typeof SizeChart>;

const Template: Story<SizeChartProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SizeChart {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  usedBytes: 45000,
  totalBytes: 100000,
};

export const WarningSpace = Template.bind({});
WarningSpace.args = {
  usedBytes: 85000,
  totalBytes: 100000,
};

export const DangerSpace = Template.bind({});
DangerSpace.args = {
  usedBytes: 95000,
  totalBytes: 100000,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  usedBytes: 95000,
  totalBytes: 100000,
  label: true,
};

export const WithChartLabel = Template.bind({});
WithChartLabel.args = {
  usedBytes: 9504400,
  totalBytes: 103840000,
  label: true,
  chartLabel: "Reported Usage",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  usedBytes: 95000,
  totalBytes: 100000,
  label: true,
  width: 50,
  height: 50,
};
