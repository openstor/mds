// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment } from "react";
import { get } from "lodash";
import styled from "styled-components";
import { ButtonProps, ConstructProps } from "./Button.types";
import { breakPoints } from "../../global/utils";

const CustomButton = styled.button<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & ConstructProps
>(
  ({
    theme,
    fullWidth,
    variant,
    iconLocation,
    icon,
    label,
    collapseOnSmall,
    parentChildren,
    sx,
  }) => {
    const neatVariant = variant || "regular";

    const buttonLabel =
      (!label && !parentChildren) || !icon
        ? {
            marginRight: 0,
            marginLeft: 0,
          }
        : {
            marginLeft: iconLocation === "end" ? "0" : "10px",
            marginRight: iconLocation === "start" ? "0" : "10px",
          };

    let smallScreenStyles = {};

    if (
      collapseOnSmall &&
      icon &&
      ((label && label.trim() !== "") || parentChildren)
    ) {
      smallScreenStyles = {
        [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
          padding: "0 14px",
          "& .button-label": {
            display: "none",
          },
        },
      };
    }

    return {
      borderRadius: 3,
      cursor: "pointer",
      width: fullWidth ? "100%" : "initial",
      height: 39,
      fontFamily: "'Inter', sans-serif",
      fontWeight: "400",
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      textTransform: neatVariant === "text" ? "uppercase" : "none",
      margin: 0,
      padding:
        (!label || label.trim() === "") && !parentChildren
          ? "0 14px"
          : "0 25px",
      transition: "all 0.2s linear",
      backgroundColor: get(
        theme,
        `buttons.${neatVariant}.enabled.background`,
        "#fff",
      ),
      borderColor: get(theme, `buttons.${neatVariant}.enabled.border`, "#000"),
      borderWidth: 1,
      borderStyle: "solid",
      color: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
      "& .button-label": {
        whiteSpace: fullWidth ? "normal" : "nowrap",
        ...buttonLabel,
      },
      "& .buttonIcon": {
        display: "block",
        height: 14,

        "& > svg": {
          fill: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
          width: 14,
          height: 14,
        },
      },
      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.disabled.background`,
          "#fff",
        ),
        borderColor: get(
          theme,
          `buttons.${neatVariant}.disabled.border`,
          "#000",
        ),
        borderWeight: 1,
        borderStyle: "solid",
        color: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
        },
      },
      "&:hover:not(:disabled)": {
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.hover.background`,
          "#fff",
        ),
        borderColor: get(theme, `buttons.${neatVariant}.hover.border`, "#000"),
        color: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
        },
      },
      "&:active:not(:disabled)": {
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.pressed.background`,
          "#fff",
        ),
        borderColor: get(
          theme,
          `buttons.${neatVariant}.pressed.border`,
          "#000",
        ),
        color: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
        },
      },
      ...smallScreenStyles,
      ...sx,
    };
  },
);
const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  label,
  variant = "regular",
  icon,
  iconLocation = "end",
  onClick,
  disabled,
  fullWidth,
  collapseOnSmall = true,
  children,
  className,
  ...props
}) => {
  let iconToPlace: React.ReactNode = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled || false}
      variant={variant || "regular"}
      iconLocation={iconLocation || "end"}
      label={label || ""}
      fullWidth={fullWidth || false}
      collapseOnSmall={!!collapseOnSmall}
      icon={iconToPlace}
      parentChildren={children || null}
      className={`${className || ""} button-${variant}`}
      {...props}
    >
      <Fragment>
        {icon && iconLocation === "start" && iconToPlace}
        <span className={"button-label"}>
          {children}
          {children && label ? " " : ""}
          {label}
        </span>
        {icon && iconLocation === "end" && iconToPlace}
      </Fragment>
    </CustomButton>
  );
};

export default Button;
