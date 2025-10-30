// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import ExpandOptionsButton from "./ExpandOptionsButton";
import { ExpandOptionsButtonProps } from "./ExpandOptionsButton.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Box from "../Box/Box";

export default {
  title: "MDS/Forms/ExpandOptionsButton",
  component: ExpandOptionsButton,
  argTypes: {},
} as Meta<typeof ExpandOptionsButton>;

const Template: Story<ExpandOptionsButtonProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const extraArgs = {
    ...args,
    open,
    onClick: () => {
      setOpen(!open);
    },
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <ExpandOptionsButton {...extraArgs} />
      {open && (
        <Box withBorders sx={{ marginTop: 10 }}>
          Simulated hidden panel
        </Box>
      )}
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "Click to Expand an Option",
  variant: "regular",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Click to Expand an Option",
  variant: "regular",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Click to Expand an Option",
  variant: "regular",
  sx: {
    color: "#000",
    backgroundColor: "#f90",
  },
};
