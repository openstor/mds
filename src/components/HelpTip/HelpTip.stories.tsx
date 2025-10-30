// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import { Meta, Story } from "@storybook/react";

import HelpTip from "./HelpTip";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { HelpTipProps } from "./HelpTip.types";
import Button from "../Button/Button";
import Grid from "../Grid/Grid";

export default {
  title: "MDS/Graphics/HelpTip",
  component: HelpTip,
  argTypes: {},
} as Meta<typeof HelpTip>;

const Template: Story<HelpTipProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Grid container>
      <Grid item xs={4}>
        <HelpTip {...args} />
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          sx={{
            flexDirection: "column",
            display: "flex",
            height: "calc(100vh - 40px)",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <HelpTip {...args} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HelpTip {...args} />
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <HelpTip {...args} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} sx={{ textAlign: "right" }}>
        <HelpTip {...args} />
      </Grid>
    </Grid>
  </StoryThemeProvider>
);

export const Bottom = Template.bind({});
Bottom.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "bottom",
  content: <span>A span block</span>,
};

export const Top = Template.bind({});
Top.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "top",
  children: <div>A div with some content</div>,
};

export const Left = Template.bind({});
Left.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "left",
  children: <a href={"#"}>A link</a>,
};

export const Right = Template.bind({});
Right.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "right",
  children: <Button id={"testButton1"}>Enabled Button</Button>,
};

export const OnDisabledElement = Template.bind({});
OnDisabledElement.args = {
  tooltip: <span>Some tooltip Label</span>,
  placement: "top",
  children: (
    <Button id={"testButton"} disabled style={{ pointerEvents: "none" }}>
      Button
    </Button>
  ),
};
