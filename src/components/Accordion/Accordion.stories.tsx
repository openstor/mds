// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Layout/Accordion",
  component: Accordion,
  argTypes: {},
} as Meta<typeof Accordion>;

const Template: Story<AccordionProps> = ({ title, children, disabled, sx }) => {
  const [expandedPanel, setExpandedPanel] = useState<string>("closed");

  const expandFunction = (expandPanel: string) => {
    if (expandedPanel === expandPanel) {
      setExpandedPanel("other");
      return;
    }
    setExpandedPanel(expandPanel);
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Accordion
        title={title}
        expanded={expandedPanel === "panel1"}
        onTitleClick={() => {
          expandFunction("panel1");
        }}
        id={"accordion1"}
        sx={sx}
        disabled={disabled}
      >
        {children}
      </Accordion>
      <Accordion
        title={title}
        expanded={expandedPanel === "panel2"}
        onTitleClick={() => {
          expandFunction("panel2");
        }}
        id={"accordion2"}
        sx={sx}
      >
        {children}
      </Accordion>
      <Accordion
        title={title}
        expanded={expandedPanel === "panel3"}
        onTitleClick={() => {
          expandFunction("panel3");
        }}
        id={"accordion3"}
        sx={sx}
      >
        {children}
      </Accordion>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Click to Expand",
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "MultiState Accordion",
  disabled: true,
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "MultiState Accordion",
  children: (
    <div>
      <p>
        My computer-- disassembled is a maze of cables, drives chips and
        ports--an array of connections, silver solderings, twisting wires.
      </p>
      <p>
        But when the satiny case is latched in place coils and cables disappear.
        The smallest particle of matter is not an atom, but a byte-- a particle
        of magic that combines and multiplies unseen inside the blinking box.
      </p>
      <p>
        Creation occurs inside my computer-- friends, family rest behind the
        pressing of selected keys. Words and faces form; smiles and frowns
        become feelings. Attraction becomes addiction.
      </p>
      <p>
        Inside my computer merchants buy and sell-- musicians sing, artists
        train pictures into pixels, poets recollect emotion in tranquillity.
      </p>
      <p>
        Inside my computer dreams are imagined into reality-- inventions, hopes,
        ideas are born and nurtured into happenings. Strangers share a table,
        touch hands across the world.
      </p>
      <p>
        Inside my computer the pulse of human hearts waxes and wanes as people
        fall in and out of love.
      </p>
      <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
    </div>
  ),
  sx: {
    backgroundColor: "#009900",
    borderColor: "#ffff00",
    color: "#fff",
  },
};
