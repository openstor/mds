// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Button from "../Button/Button";
import CopyIcon from "../Icons/CopyIcon";

export default {
  title: "MDS/Layout/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as Meta<typeof Breadcrumbs>;

const Template: Story<BreadcrumbsProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Breadcrumbs
      additionalOptions={
        <Fragment>
          <Button
            id={"copy-path"}
            icon={
              <CopyIcon
                style={{
                  width: "12px",
                  height: "12px",
                  fill: "#969FA8",
                  marginTop: -1,
                }}
              />
            }
            variant={"regular"}
            onClick={() => {
              alert("Copy test");
            }}
            style={{
              width: "28px",
              height: "28px",
              color: "#969FA8",
              border: "#969FA8 1px solid",
              marginRight: 5,
            }}
          />
        </Fragment>
      }
      goBackFunction={() => {
        alert("Go back!");
      }}
    >
      <a href="#">First Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Second Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Third Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Fourth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Fifth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Sixth Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Seventh Link</a>
      <span className={"slashSpacingStyle"}>/</span>
      <a href="#">Eighth Link</a>
    </Breadcrumbs>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
