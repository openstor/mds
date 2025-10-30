// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Tag from "./Tag";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { TagProps } from "./Tag.types";
import AddIcon from "../Icons/AddIcon";

export default {
  title: "MDS/Layout/Tag",
  component: Tag,
  argTypes: {},
} as Meta<typeof Tag>;

const Template: Story<TagProps> = ({
  label,
  id,
  onDelete,
  sx,
  color,
  square,
}) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Tag label={label} color={color} id={id} sx={sx} square={square} />
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        onDelete={onDelete}
        sx={sx}
        square={square}
      >
        {" "}
        with on Delete
      </Tag>
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        onDelete={onDelete}
        sx={sx}
        variant={"outlined"}
        square={square}
      >
        {" "}
        Outlined
      </Tag>
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        sx={sx}
        icon={<AddIcon />}
        square={square}
      >
        {" "}
        With an Icon
      </Tag>
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        sx={sx}
        variant={"outlined"}
        icon={<AddIcon />}
        square={square}
      >
        {" "}
        Outlined With an Icon
      </Tag>
      &nbsp;
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "A Tag",
  id: "tag-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "A Tag",
  id: "tag-test",
  color: "secondary",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Alert = Template.bind({});
Alert.args = {
  label: "A Tag",
  id: "tag-test",
  color: "alert",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Warn = Template.bind({});
Warn.args = {
  label: "A Tag",
  id: "tag-test",
  color: "warn",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Grey = Template.bind({});
Grey.args = {
  label: "A Tag",
  id: "tag-test",
  color: "grey",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Ok = Template.bind({});
Ok.args = {
  label: "A Tag",
  id: "tag-test",
  color: "ok",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Square = Template.bind({});
Square.args = {
  label: "A Tag",
  id: "tag-test",
  color: "default",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
  square: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "A Tag",
  id: "tag-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
  sx: {
    backgroundColor: "#080",
    color: "#ff0",
  },
};
