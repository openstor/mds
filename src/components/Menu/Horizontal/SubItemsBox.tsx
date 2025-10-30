// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, useEffect, useState } from "react";
import get from "lodash/get";
import debounce from "lodash/debounce";
import styled, { CSSObject } from "styled-components";
import { SubItemsBoxProps } from "../Menu.types";
import { lightColors } from "../../../global/themes";
import Box from "../../Box/Box";

const minDropWidth = 180;

const SubItemsBoxContainer = styled.div(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "transparent",
  zIndex: 5000,
  overscrollBehavior: "contain",
  "& > .subItemsBox": {
    position: "absolute",
    display: "inline-block",
    minWidth: minDropWidth,
    backgroundColor: get(
      theme,
      "menu.horizontal.dropBackground",
      lightColors.boxBackground,
    ),
    border: `${get(theme, "borderColor", lightColors.borderColor)}`,
    "& .menuItemButton": {
      width: "100%",
      "&:hover, &.selected": {
        backgroundColor: get(
          theme,
          "menu.horizontal.hoverSelectedBackground",
          lightColors.mainBlue,
        ),
        borderBottom: 0,
        color: get(
          theme,
          "menu.horizontal.dropHoverSelectedColor",
          lightColors.white,
        ),
        "& .iconContainer": {
          border: `${get(
            theme,
            "menu.horizontal.dropHoverSelectedColor",
            lightColors.white,
          )} 1px solid`,
        },
      },
    },
  },
}));

const SubItemsBox: FC<SubItemsBoxProps> = ({
  open,
  anchorEl,
  hideTriggerAction,
  children,
}) => {
  const [coords, setCoords] = useState<CSSObject | null>(null);

  const windowWidth = document.documentElement.offsetWidth;

  const calcElementPosition = (
    anchorEl: (EventTarget & HTMLElement) | null,
  ) => {
    if (!anchorEl) {
      return {
        top: 0,
        left: 0,
      };
    }

    const bounds = anchorEl.getBoundingClientRect();
    let left = bounds.left;
    let calcEndPosition = left + minDropWidth;

    if (calcEndPosition > windowWidth) {
      return {
        top: bounds.top + bounds.height,
        right: 0,
      };
    }

    return {
      top: bounds.top + bounds.height,
      left,
    };
  };

  useEffect(() => {
    if (open) {
      setCoords(calcElementPosition(anchorEl));
      return;
    }
    setCoords(null);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      hideTriggerAction();
    };

    const scrollResize = debounce((anchorEl) => {
      if (!anchorEl || !anchorEl.getBoundingClientRect()) {
        return;
      }
      setCoords(calcElementPosition(anchorEl));
    }, 300);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", () => {
      scrollResize(anchorEl);
    });
  });

  if (!open || !anchorEl) {
    return null;
  }

  return !coords ? null : (
    <SubItemsBoxContainer onClick={hideTriggerAction}>
      <Box className={"subItemsBox"} sx={{ ...coords }}>
        {children}
      </Box>
    </SubItemsBoxContainer>
  );
};

export default SubItemsBox;
