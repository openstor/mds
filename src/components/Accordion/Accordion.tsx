// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import get from "lodash/get";
import {
  AccordionContentProps,
  AccordionMainProps,
  AccordionProps,
} from "./Accordion.types";
import { lightColors } from "../../global/themes";
import { ExpandCaret } from "../Icons";
import CollapseCaret from "../Icons/CollapseCaret";
import Box from "../Box/Box";

const AccordionContainer = styled.div<AccordionMainProps>(({ theme, sx }) => ({
  border: `1px solid ${get(theme, "borderColor", lightColors.borderColor)}`,
  borderRadius: 2,
  ...sx,
}));

const AccordionTitleBar = styled.div<HTMLAttributes<HTMLDivElement>>(
  ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    "&.disabled": {
      cursor: "not-allowed",
      color: get(theme, "mutedText", lightColors.mutedText),
      backgroundColor: get(
        theme,
        "signalColors.disabled",
        lightColors.disabledGrey,
      ),
    },
    "&:not(.disabled):hover": {
      backgroundColor: get(theme, "boxBackground", lightColors.boxBackground),
    },
  }),
);

const AccordionContent = styled.div<AccordionContentProps>(
  ({ theme, expanded }) => ({
    borderTop: expanded
      ? `1px solid ${get(theme, "borderColor", lightColors.borderColor)}`
      : "0",
    display: "grid",
    gridTemplateRows: expanded ? "1fr" : "0fr",
    transition: "250ms grid-template-rows ease",
    "& .expandSubContainer": {
      overflow: "hidden",
      padding: expanded ? 10 : 0,
      transition: expanded ? "initial" : "250ms padding ease 150ms",
    },
  }),
);

const Accordion: FC<AccordionProps> = ({
  title,
  expanded,
  children,
  onTitleClick,
  disabled,
  id,
  sx,
}) => {
  return (
    <AccordionContainer id={id} sx={sx}>
      <AccordionTitleBar
        onClick={() => (!disabled ? onTitleClick() : null)}
        className={`accordionTitle ${disabled ? "disabled" : ""}`}
      >
        {title}
        {expanded ? <CollapseCaret /> : <ExpandCaret />}
      </AccordionTitleBar>
      <AccordionContent className={`accordionContent`} expanded={expanded}>
        <Box className={"expandSubContainer"}>{children}</Box>
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
