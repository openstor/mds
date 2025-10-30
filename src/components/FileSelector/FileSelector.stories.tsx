// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import FileSelector from "./FileSelector";
import { FileSelectorProps } from "./FileSelector.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";

export default {
  title: "MDS/Forms/FileSelector",
  component: FileSelector,
  argTypes: {},
} as Meta<typeof FileSelector>;

const Template: Story<FileSelectorProps> = ({
  label,
  required,
  disabled,
  error,
  tooltip,
  returnEncodedData,
}) => {
  const [value, setValue] = useState<string>("");
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <FileSelector
          label={label}
          id={"fileSelector"}
          required={required}
          disabled={disabled}
          error={error}
          tooltip={tooltip}
          name={"fileSelectorName"}
          value={value}
          onChange={(event, fileName, inputData) => {
            setValue(fileName);
            console.log(
              "Event:",
              event,
              "File Name:",
              fileName,
              "Encoded Data in BASE64:",
              inputData,
            );
          }}
          returnEncodedData={returnEncodedData}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select a File",
  required: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: "Select a File",
  required: true,
  disabled: true,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "Input with Error",
  required: true,
  error: "This is an error message",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Select a File",
  required: true,
  tooltip: "Tooltip text",
};

export const ReturnBase64Data = Template.bind({});
ReturnBase64Data.args = {
  label: "Select a File",
  required: true,
  tooltip: "Tooltip text",
  returnEncodedData: true,
};
