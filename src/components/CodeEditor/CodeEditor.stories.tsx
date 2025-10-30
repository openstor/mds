// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import CodeEditor from "./CodeEditor";
import { CodeEditorProps } from "./CodeEditor.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Button from "../Button/Button";
import CopyIcon from "../Icons/CopyIcon";

export default {
  title: "MDS/Forms/CodeEditor",
  component: CodeEditor,
  argTypes: {},
} as Meta<typeof CodeEditor>;

const Template: Story<CodeEditorProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <CodeEditor {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Some Code to Edit",
};

export const WithHelpTools = Template.bind({});
WithHelpTools.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  mode: "js",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  tooltip: "This is a code editor",
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  sx: {
    "& .editor": {
      backgroundColor: "#090",
    },
  },
};
