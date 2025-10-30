// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import RadioGroup from "./RadioGroup";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { RadioGroupProps } from "./RadioGroup.types";

export default {
  title: "MDS/Forms/RadioGroup",
  component: RadioGroup,
  argTypes: {},
} as Meta<typeof RadioGroup>;

const Template: Story<RadioGroupProps> = ({
  label,
  id,
  tooltip,
  disableOptions,
  displayInColumn,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("option2");
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <RadioGroup
        id={id}
        label={label}
        tooltip={tooltip}
        currentValue={selectedOption}
        onChange={(e, extra) => {
          setSelectedOption(e.target.value);

          if (extra) {
            alert(`Extra Value: ${JSON.stringify(extra)}`);
          }
        }}
        selectorOptions={[
          { label: "Option 1", value: "option1" },
          {
            label: "Option 2",
            value: "option2",
          },
          { label: "Option 3", value: "option3" },
          {
            label: "With Extra Value",
            value: "option4",
            extraValue: { value: "extravalue" },
          },
          { label: "Disabled Option", value: "option5", disabled: true },
        ]}
        name={"selectBox"}
        disableOptions={disableOptions}
        displayInColumn={displayInColumn}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select an Option",
  id: "RadioGroup",
  tooltip: "test",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Select an Option",
  id: "RadioGroup",
  tooltip: "test",
  disableOptions: true,
};

export const DisplayInColumn = Template.bind({});
DisplayInColumn.args = {
  label: "Select an Option",
  id: "RadioGroup",
  tooltip: "test",
  disableOptions: false,
  displayInColumn: true,
};
