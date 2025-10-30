// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { Fragment, useState } from "react";
import { Meta, Story } from "@storybook/react";

import DateTimeInput from "./DateTimeInput";
import { DateTimeInputProps } from "./DateTimeInput.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import { DateTime } from "luxon";
import TestIcon from "../../utils/TestIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import Box from "../Box/Box";
import TimeIcon from "../Icons/TimeIcon";

export default {
  title: "MDS/Forms/TimeSelector/DateTimeInput",
  component: DateTimeInput,
  argTypes: {},
} as Meta<typeof DateTimeInput>;

const Template: Story<DateTimeInputProps> = ({
  mode,
  usePortal,
  maxDate,
  minDate,
  sx,
  timeFormat,
  secondsSelector,
  label,
  tooltip,
  openPickerIcon,
  displayFormat,
  pickerStartComponent,
}) => {
  const [newValue, setValue] = useState<DateTime>(DateTime.now());

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <DateTimeInput
          name={"dateTimeStart"}
          id={"story-DateTimeInput"}
          value={newValue}
          onChange={(value) => {
            setValue(value);
          }}
          mode={mode}
          maxDate={maxDate}
          minDate={minDate}
          sx={sx}
          usePortal={usePortal}
          timeFormat={timeFormat}
          secondsSelector={secondsSelector}
          label={label}
          tooltip={tooltip}
          openPickerIcon={openPickerIcon}
          displayFormat={displayFormat}
          pickerStartComponent={pickerStartComponent}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
};

export const Format24H = Template.bind({});
Format24H.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "24h",
};

export const WithSecondsSelector = Template.bind({});
WithSecondsSelector.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
};

export const CustomPickerIcon = Template.bind({});
CustomPickerIcon.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  openPickerIcon: <CalendarIcon />,
};

export const CustomDateDisplayFormat = Template.bind({});
CustomDateDisplayFormat.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  openPickerIcon: <CalendarIcon />,
  displayFormat: "DDDD",
};

export const PickerStartComponent = Template.bind({});
PickerStartComponent.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  pickerStartComponent: (
    <Fragment>
      <TimeIcon /> Start Date
    </Fragment>
  ),
};

export const DateOnly = Template.bind({});
DateOnly.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  mode: "date",
};
