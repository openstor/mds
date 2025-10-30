// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, useEffect, useState } from "react";
import Box from "../Box/Box";
import { TimeSelectorProps } from "./DateTimeInput.types";
import styled from "styled-components";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const TimeSelectorContainer = styled.div(({ theme }) => ({
  "& .timeTitle": {
    display: "flex",
    justifyContent: "center",
    gap: 5,
    borderBottom: `1px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
    padding: "0 0 12px",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: get(theme, "fontColor", lightColors.defaultFontColor),
  },
  "& .selectors": {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    "& .columnSelector": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      gap: 5,
      "& .scrollRollbar": {
        display: "block",
        overflowY: "auto",
        overflowX: "hidden",
        height: 170,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          width: 5,
        },
        "&::-webkit-scrollbar-thumb": {
          background: get(
            theme,
            "menu.vertical.sectionDividerColor",
            lightColors.menuColorDivider,
          ),
          borderRadius: 0,
        },

        "&::-webkit-scrollbar-track": {
          background: get(theme, "borderColor", lightColors.borderColor),
          boxShadow: `inset 0px 0px 0px 0px ${get(
            theme,
            "borderColor",
            lightColors.borderColor,
          )}`,
          borderRadius: 0,
        },
      },
      "& .titleElement": {
        fontSize: 10,
        color: get(theme, "mutedText", lightColors.mutedText),
        textAlign: "center",
      },
    },
  },
  "& .titles": {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
  },
}));

const SelectorButton = styled.button(({ theme }) => ({
  cursor: "pointer",
  display: "flex",
  width: "100%",
  backgroundColor: "transparent",
  fontWeight: "bold",
  border: 0,
  padding: "5px 10px",
  color: get(theme, "fontColor", lightColors.defaultFontColor),
  "&:hover": {
    backgroundColor: get(
      theme,
      "buttons.text.hover.background",
      lightColors.hoverGrey,
    ),
  },
  "&.selected": {
    backgroundColor: get(theme, "signalColors.main", lightColors.mainBlue),
    color: get(theme, "bgColor", lightColors.white),
  },
}));

const TimeSelector: FC<TimeSelectorProps> = ({
  value,
  onChange,
  completeCallback,
  secondsSelector = false,
  timeFormat = "24h" as "12h" | "24h",
}) => {
  const [selectedElements, setSelectedElements] = useState<string[]>([]);

  useEffect(() => {
    let itemsCount = timeFormat === "12h" ? 3 : 2;

    if (secondsSelector) {
      itemsCount += 1;
    }

    if (selectedElements.length >= itemsCount && completeCallback) {
      completeCallback();
    }
  }, [selectedElements, timeFormat, completeCallback]);

  if (!value) {
    return null;
  }

  const changeTimeAction = (
    newValue: number,
    type: "minute" | "second" | "hour" | "meridiem",
  ) => {
    let changeValue = value;
    const currentMeridiem = value?.hour >= 12 ? "PM" : "AM";

    switch (type) {
      case "minute":
        changeValue = changeValue.set({ minute: newValue });
        break;
      case "second":
        changeValue = changeValue.set({ second: newValue });
        break;
      case "hour":
        let nvValue = newValue;

        if (
          currentMeridiem === "AM" &&
          timeFormat === "12h" &&
          newValue === 12
        ) {
          nvValue = 0;
        } else if (
          currentMeridiem === "PM" &&
          timeFormat === "12h" &&
          newValue <= 12
        ) {
          nvValue = newValue + 12;
        }

        changeValue =
          timeFormat === "12h"
            ? changeValue.set({ hour: nvValue })
            : changeValue.set({ hour: nvValue });
        break;
      case "meridiem":
        let hour = changeValue.hour;

        if (newValue === 0 && currentMeridiem === "PM" && hour >= 12) {
          // Set AM
          hour -= 12;
        } else if (newValue === 1 && currentMeridiem === "AM" && hour < 12) {
          // Set PM
          hour += 12;
        }
        changeValue = changeValue.set({ hour });
        break;
    }

    if (!selectedElements.includes(type)) {
      setSelectedElements([...selectedElements, type]);
    }

    onChange(changeValue);
  };

  const ActiveSelectionButton = ({
    label,
    type,
    className,
    itemValue,
  }: {
    label: string;
    itemValue: number;
    className: string;
    type: "hour" | "minute" | "second" | "meridiem";
  }) => (
    <SelectorButton
      onClick={() => {
        changeTimeAction(itemValue, type);
      }}
      className={className}
    >
      {label}
    </SelectorButton>
  );

  const CommonElementsList = ({ type }: { type: "minute" | "second" }) => {
    return Array.from(Array(60).keys()).map((val) => {
      const selectedValue = type === "minute" ? value?.minute : value?.second;
      return (
        <ActiveSelectionButton
          key={`${type}-${val}`}
          itemValue={val}
          className={selectedValue === val ? "selected" : ""}
          label={`${val}`.padStart(2, "0")}
          type={type}
        />
      );
    });
  };

  const HourElementsList = () => {
    return Array.from(Array(timeFormat === "12h" ? 12 : 24).keys()).map(
      (val) => {
        const valUse = timeFormat === "12h" ? val + 1 : val;
        const valSelected = value?.toFormat(timeFormat === "12h" ? "h" : "H");

        return (
          <ActiveSelectionButton
            key={`hour-${val}`}
            itemValue={valUse}
            className={valSelected === `${valUse}` ? "selected" : ""}
            label={`${valUse}`.padStart(2, "0")}
            type={"hour"}
          />
        );
      },
    );
  };

  return (
    <TimeSelectorContainer>
      <Box className={"timeTitle"}>Time</Box>
      <Box className={"selectors"}>
        <Box className={"columnSelector"}>
          <span className="titleElement">Hour</span>
          <Box className={"scrollRollbar"}>
            <HourElementsList />
          </Box>
        </Box>
        <Box className={"columnSelector"}>
          <span className="titleElement">Minute</span>
          <Box className={"scrollRollbar"}>
            <CommonElementsList type={"minute"} />
          </Box>
        </Box>

        {secondsSelector && (
          <Box className={"columnSelector"}>
            <span className="titleElement">Second</span>
            <Box className={"scrollRollbar"}>
              <CommonElementsList type={"second"} />
            </Box>
          </Box>
        )}
        {timeFormat === "12h" && (
          <Box className={"columnSelector"}>
            <span className="titleElement">&nbsp;</span>
            <Box className={"scrollRollbar"}>
              <ActiveSelectionButton
                itemValue={0}
                className={value?.hour < 12 ? "selected" : ""}
                label={"AM"}
                type={"meridiem"}
              />
              <ActiveSelectionButton
                itemValue={1}
                className={value?.hour >= 12 ? "selected" : ""}
                label={"PM"}
                type={"meridiem"}
              />
            </Box>
          </Box>
        )}
      </Box>
    </TimeSelectorContainer>
  );
};

export default TimeSelector;
