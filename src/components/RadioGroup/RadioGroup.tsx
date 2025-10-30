// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { OptionsContainerProps, RadioGroupProps } from "./RadioGroup.types";
import InputLabel from "../InputLabel/InputLabel";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import FieldContainer from "../../global/FieldContainer";
import Tooltip from "../Tooltip/Tooltip";
import HelpIcon from "../Icons/HelpIcon";

const RadioButton = styled.label<InputLabelProps>(({ sx, theme }) => ({
  "& input": {
    appearance: "none",
    backgroundColor: "transparent",
    margin: 0,
    display: "none",
    "& ~ .radio": {
      position: "relative",
      display: "block",
      width: 16,
      height: 16,
      borderRadius: "100%",
      border: `1px solid ${get(theme, "checkbox.checkBoxBorder", "#c3c3c3")}`,
      boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.1)",
      "&.checked": {
        "&::before": {
          content: "' '",
          position: "absolute",
          display: "block",
          width: 12,
          height: 12,
          backgroundColor: get(theme, "checkbox.checkBoxColor", "#4CCB92"),
          borderRadius: "100%",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
        },
      },
    },
    "&:disabled": {
      "& ~ .radio": {
        border: `1px solid ${get(theme, "checkbox.disabledBorder", "#D5D7D7")}`,
        cursor: "not-allowed",
        boxShadow: "inset 0px 1px 3px rgba(240,240,240,0.1)" as const,
      },
      "&:checked ~ .radio": {
        "&:before": {
          backgroundColor: get(theme, "checkbox.disabledColor", "#D5D7D7"),
        },
      },
    },
  },
  ...sx,
}));

const OptionsContainer = styled.div<OptionsContainerProps>(
  ({ inColumn, theme }) => ({
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: inColumn ? "column" : "row",
    justifyContent: "flex-end",
    gap: 15,
    "& .optionLabel": {
      userSelect: "none",
      "&.checked": {
        fontWeight: "bold",
      },
      "&.disabled": {
        color: get(theme, "checkbox.disabledColor", "#D5D7D7"),
        cursor: "not-allowed",
      },
    },
  }),
);

const RadioContainer = styled.div(({}) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
}));

const RadioGroup: FC<RadioGroupProps> = ({
  tooltip,
  label,
  id,
  sx,
  onChange,
  className,
  name,
  selectorOptions,
  currentValue,
  disableOptions = false,
  displayInColumn = false,
  helpTip,
  helpTipPlacement,
}) => {
  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
      }}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {tooltip && tooltip !== "" && (
            <div className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <HelpIcon />
              </Tooltip>
            </div>
          )}
        </InputLabel>
      )}
      <OptionsContainer inColumn={displayInColumn}>
        {selectorOptions && (
          <Fragment>
            {selectorOptions.map((selector) => (
              <RadioContainer key={`option-${id}-${selector.value}`}>
                <RadioButton htmlFor={`option-${id}-${selector.value}`} sx={sx}>
                  <input
                    type={"radio"}
                    name={name}
                    id={`option-${id}-${selector.value}`}
                    value={selector.value}
                    defaultChecked={currentValue === selector.value}
                    onChange={(event) => onChange(event, selector.extraValue)}
                    disabled={disableOptions || !!selector.disabled}
                  />
                  <span
                    className={`radio ${
                      currentValue === selector.value ? "checked" : ""
                    }`}
                  />
                </RadioButton>
                <label
                  htmlFor={`option-${id}-${selector.value}`}
                  className={`optionLabel ${
                    currentValue === selector.value ? "checked" : ""
                  } ${disableOptions || !!selector.disabled ? "disabled" : ""}`}
                >
                  {selector.label}
                </label>
              </RadioContainer>
            ))}
          </Fragment>
        )}
      </OptionsContainer>
    </FieldContainer>
  );
};

export default RadioGroup;
