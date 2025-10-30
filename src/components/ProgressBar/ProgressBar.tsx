// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import get from "lodash/get";
import { CommonProgressBar, ProgressBarProps } from "./ProgressBar.types";
import { lightColors } from "../../global/themes";
import Box from "../Box/Box";

const colorItems = {
  blue: "main",
  red: "danger",
  green: "good",
  orange: "warning",
  grey: "disabled",
};

const ProgressBase = styled.div<CommonProgressBar>(
  ({ theme, sx, color, barHeight, transparentBG }) => ({
    "& .progBlock": {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    "& .progressContainer": {
      position: "relative",
      width: "100%",
      height: barHeight,
      backgroundColor: transparentBG
        ? "transparent"
        : get(theme, "boxBackground", lightColors.boxBackground),
      borderRadius: barHeight,
      overflow: "hidden",
    },
    "& .notificationLabel": {
      fontSize: 12,
      color: get(
        theme,
        `signalColors.${colorItems[color || "blue"]}`,
        lightColors.mainBlue,
      ),
    },
    "& .percentageBar": {
      display: "block",
      height: barHeight,
      backgroundColor: get(
        theme,
        `signalColors.${colorItems[color || "blue"]}`,
        lightColors.mainBlue,
      ),
      transitionDuration: "0.1s",
      borderRadius: barHeight,
    },
    ...sx,
  }),
);

export const innerAnimation = keyframes`0% {
                                          left: -100px;
                                          visibility: visible;
                                          width: 100px;
                                        }
                                          60% {
                                            width: 300px
                                          }
                                          99% {
                                            left: calc(100% + 300px);
                                          }
                                          100% {
                                            visibility: hidden;
                                            width: 100px;
                                          }`;

const IndeterminateItem = styled.div<CommonProgressBar>`
  width: 100px;
  height: ${(props) => get(props, "barHeight", 8)}px;
  display: block;
  position: absolute;
  border-radius: ${(props) => get(props, "barHeight", 8)}px;
  animation: ${innerAnimation} 1000ms linear infinite normal forwards;
  background-color: ${(props) =>
    get(
      props.theme,
      `signalColors.${colorItems[props.color || "blue"]}`,
      lightColors.mainBlue,
    )};
`;

const ProgressBar: FC<ProgressBarProps> = ({
  progressLabel = false,
  sx,
  value = 0,
  maxValue = 100,
  variant = "indeterminate",
  notificationLabel = "",
  color = "blue",
  barHeight = 6,
  transparentBG = false,
}) => {
  const calcPerc = (value * 100) / maxValue;

  return (
    <ProgressBase
      color={color}
      sx={sx}
      barHeight={barHeight}
      transparentBG={transparentBG}
    >
      <Box className={"progBlock"}>
        <Box className={"progressContainer"}>
          {variant === "indeterminate" ? (
            <IndeterminateItem color={color} barHeight={barHeight} />
          ) : (
            <Box
              className={"percentageBar"}
              style={{ width: `${calcPerc}%` }}
            />
          )}
        </Box>
        {progressLabel && variant !== "indeterminate" && (
          <span className={"progressPercentage"}>{Math.floor(calcPerc)}%</span>
        )}
      </Box>
      {notificationLabel !== "" && (
        <span className={"notificationLabel"}>{notificationLabel}</span>
      )}
    </ProgressBase>
  );
};

export default ProgressBar;
