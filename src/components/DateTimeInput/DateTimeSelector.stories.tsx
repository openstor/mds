// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { useState } from "react";
import { Meta, Story } from "@storybook/react";

import DateTimeSelector from "./DateTimeSelector";
import { DateTimeSelectorProps } from "./DateTimeInput.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import { DateTime } from "luxon";

export default {
  title: "MDS/Forms/TimeSelector/DateTimeSelector",
  component: DateTimeSelector,
  argTypes: {},
} as Meta<typeof DateTimeSelector>;

const Template: Story<DateTimeSelectorProps> = ({
  mode,
  id,
  usePortal,
  maxDate,
  minDate,
  sx,
  anchorEl,
  timeFormat,
  secondsSelector,
}) => {
  const [newValue, setValue] = useState<DateTime>(DateTime.now());

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <DateTimeSelector
          id={"story-DateTimeSelector"}
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
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "DateTimeSelector",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
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

export const CalendarOnly = Template.bind({});
CalendarOnly.args = {
  id: "DateTimeInput",
  usePortal: false,
  mode: "date",
};
