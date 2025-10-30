// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Snackbar from "./Snackbar";
import { SnackbarProps } from "./Snackbar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";

export default {
  title: "MDS/Information/Snackbar",
  component: Snackbar,
  argTypes: {},
} as Meta<typeof Snackbar>;

const Template: Story<SnackbarProps> = ({
  message,
  closeButton,
  variant,
  autoHideDuration,
  condensed,
  mode,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Button id={"activateSnackbar"} onClick={() => setSnackbarOpen(true)}>
        Click to Show Snackbar
      </Button>
      <Snackbar
        message={message}
        closeButton={closeButton}
        onClose={() => {
          setSnackbarOpen(false);
        }}
        open={snackbarOpen}
        autoHideDuration={autoHideDuration}
        variant={variant}
        condensed={condensed}
        mode={mode}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: "This is a notice message",
  closeButton: true,
};

export const Success = Template.bind({});
Success.args = {
  message: "This is a success message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "warning",
};

export const Error = Template.bind({});
Error.args = {
  message: "This is an error message",
  closeButton: true,
  autoHideDuration: 0,
  variant: "error",
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  message: "This is an error message",
  closeButton: false,
  variant: "error",
};

export const LongTextTruncation = Template.bind({});
LongTextTruncation.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
};

export const AutoHideDuration = Template.bind({});
AutoHideDuration.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 2,
};

export const Condensed = Template.bind({});
Condensed.args = {
  message: "Small Notification",
  closeButton: false,
  autoHideDuration: 0,
  condensed: true,
};

export const CondensedWithClose = Template.bind({});
CondensedWithClose.args = {
  message: "Small Notification",
  closeButton: true,
  autoHideDuration: 10,
  condensed: true,
};

export const CondensedWithLargeText = Template.bind({});
CondensedWithLargeText.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
  condensed: true,
};

export const InlineMode = Template.bind({});
InlineMode.args = {
  message:
    "Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar Super long text message to test truncate functionality in this snackbar ",
  closeButton: true,
  autoHideDuration: 0,
  condensed: true,
  mode: "inline",
};
