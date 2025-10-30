// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import DropdownSelector from "./DropdownSelector";
import { DropdownSelectorProps } from "./DropdownSelector.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Box from "../Box/Box";
import Button from "../Button/Button";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Forms/DropdownSelector",
  component: DropdownSelector,
  argTypes: {},
} as Meta<typeof DropdownSelector>;

const Template: Story<DropdownSelectorProps> = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDownloadMenu = Boolean(anchorEl);

  const handleCloseDownload = () => {
    setAnchorEl(null);
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Button
        id={"test-button"}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        icon={<TestIcon />}
      />
      <DropdownSelector
        open={openDownloadMenu}
        anchorEl={anchorEl}
        hideTriggerAction={() => {
          handleCloseDownload();
        }}
        {...args}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Test Label 1", value: "tl1" },
    { label: "Test Label 2", value: "tl2" },
  ],
};

export const AnchorEnd = Template.bind({});
AnchorEnd.args = {
  options: [
    { label: "Test Label 1", value: "tl1" },
    { label: "Test Label 2", value: "tl2" },
  ],
  anchorOrigin: "end",
};
