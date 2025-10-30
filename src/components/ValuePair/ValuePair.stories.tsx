// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import ValuePair from "./ValuePair";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { ValuePairProps } from "./ValuePair.types";

export default {
  title: "MDS/Layout/ValuePair",
  component: ValuePair,
  argTypes: {},
} as Meta<typeof ValuePair>;

const Template: Story<ValuePairProps> = ({ sx, direction }) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ValuePair
      label={"State"}
      value={
        <span>
          "Value"<a href={"#"}>Link</a>
        </span>
      }
      sx={sx}
      direction={direction}
    />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    backgroundColor: "#080",
    color: "#fff",
  },
};
