// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Switch from "./Switch";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { SwitchProps } from "./Switch.types";

export default {
  title: "MDS/Forms/Switch",
  component: Switch,
  argTypes: {},
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = ({
  id,
  label,
  tooltip,
  sx,
  className,
  switchOnly,
  indicatorLabels,
  description,
  disabled,
  checked,
}) => {
  const [stateChecked, setChecked] = useState<boolean>(checked);
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Switch
        id={id}
        label={label}
        tooltip={tooltip}
        sx={sx}
        className={className}
        switchOnly={switchOnly}
        indicatorLabels={indicatorLabels}
        description={description}
        checked={stateChecked}
        disabled={disabled}
        onClick={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: false,
};

export const ActiveDisabledSwitch = Template.bind({});
ActiveDisabledSwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  description: "This text describes what this switch is meant to do",
};

export const CustomIndicatorLabels = Template.bind({});
CustomIndicatorLabels.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  description: "This text describes what this switch is meant to do",
  indicatorLabels: ["Enabled", "Disabled"],
};

export const OnlySwitch = Template.bind({});
OnlySwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  switchOnly: true,
  description: "This text describes what this switch is meant to do",
};
