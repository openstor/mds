// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import LoginWrapper from "./LoginWrapper";
import { LoginWrapperProps } from "./LoginWrapper.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";

export default {
  title: "MDS/FullPage/LoginWrapper",
  component: LoginWrapper,
  argTypes: {},
} as Meta<typeof LoginWrapper>;

const Template: Story<LoginWrapperProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <LoginWrapper {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});

const demoInputStyles = {
  width: "100%",
  backgroundColor: "transparent",
  border: "#00000020 1px solid",
  borderRadius: "3px",
  height: "30px",
  marginBottom: "20px",
  padding: "5px",
};

Default.args = {
  promoHeader: <Fragment>Multi-Cloud Object&nbsp;Store</Fragment>,
  promoInfo: (
    <Fragment>
      MinIO offers high-performance, S3 compatible object storage. <br />
      Native to Kubernetes, MinIO is the only object storage suite available on
      every public cloud, every Kubernetes distribution, the private cloud and
      the edge. MinIO is software-defined and is 100% open source under GNU AGPL
      v3. <a href={"#"}>link</a>
    </Fragment>
  ),
  logoProps: {
    applicationName: "console",
    subVariant: "AGPL",
  },
  form: (
    <Fragment>
      DEMO FORM
      <input name={"testInput"} style={demoInputStyles} placeholder="User" />
      <br />
      <input
        name={"testInput"}
        type={"password"}
        style={demoInputStyles}
        placeholder="Password"
      />
      <br />
      <Button
        id={"submit"}
        type={"button"}
        label={"Login"}
        variant={"callAction"}
        fullWidth
      />
    </Fragment>
  ),
  formFooter: (
    <Fragment>
      Documentation│<a href={"#"}>GitHub</a>│Support│Download
    </Fragment>
  ),
};
