// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { Meta, Story } from "@storybook/react";

import Slider from "./Slider";
import { SliderProps } from "./Slider.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import TestIcon from "../../utils/TestIcon";
import Box from "../Box/Box";
import UsersIcon from "../Icons/UsersIcon";
import PasswordKeyIcon from "../Icons/PasswordKeyIcon";
import { useState } from "react";

export default {
  title: "MDS/Forms/Slider",
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>;

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = useState<number>(0);
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <Slider
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...args}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Slide to select a value",
  required: true,
};

export const DisabledSlider = Template.bind({});
DisabledSlider.args = {
  label: "Slide to select a value",
  required: true,
  disabled: true,
  value: "Demo Text",
};

export const ErrorSlider = Template.bind({});
ErrorSlider.args = {
  label: "Slider with Error",
  required: true,
  error: "This is an error message",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Slide to select a value",
  required: true,
  tooltip: "Tooltip text",
};

export const DisplayValue = Template.bind({});
DisplayValue.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
};

export const CustomDisplayFunction = Template.bind({});
CustomDisplayFunction.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
  min: 0,
  max: 10,
  step: 1,
  marks: true,
  displayValueFunction: (value) => {
    return `${value} % Reduction`;
  },
};

export const WithSteps = Template.bind({});
WithSteps.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
  min: 0,
  max: 10,
  step: 1,
  marks: true,
};
