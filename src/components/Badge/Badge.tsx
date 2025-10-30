// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment, HTMLAttributes } from "react";
import styled from "styled-components";
import { BadgeConstruct, BadgeProps } from "./Badge.types";
import { lightColors } from "../../global/themes";
import get from "lodash/get";

const BadgeParent = styled.span<
  HTMLAttributes<HTMLDivElement> & BadgeConstruct
>(
  ({
    theme,
    sx,
    verticalPosition,
    horizontalPosition,
    color,
    shape,
    dotOnly,
  }) => {
    let circularRadius = dotOnly ? "100%" : 10;

    return {
      position: "relative",
      display: "inline-flex",
      "& .badgeContent": {
        fontSize: 10,
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        padding: dotOnly ? 0 : "0 6px",
        borderRadius: shape === "circular" ? circularRadius : 3,
        right: horizontalPosition === "right" ? 0 : "initial",
        top: verticalPosition === "top" ? 0 : "initial",
        left: horizontalPosition === "left" ? 0 : "initial",
        bottom: verticalPosition === "bottom" ? 0 : "initial",
        minWidth: !dotOnly ? 20 : 10,
        width: dotOnly ? 10 : "initial",
        height: !dotOnly ? 20 : 10,
        backgroundColor: get(
          theme,
          `badge.${color}.backgroundColor`,
          lightColors.mainBlue,
        ),
        color: get(theme, `badge.${color}.textColor`, lightColors.white),
        fontWeight: "bold",
        textAlign: "center",
        zIndex: 1,
        transform: `scale(1) translate(${
          horizontalPosition === "right" ? "" : "-"
        }50%, ${verticalPosition === "bottom" ? "" : "-"}50%)`,
      },
      ...sx,
    };
  },
);

const Badge: FC<HTMLAttributes<HTMLSpanElement> & BadgeProps> = ({
  sx,
  children,
  horizontalPosition = "right" as "right" | "left",
  verticalPosition = "bottom" as "top" | "bottom",
  color = "default",
  shape = "circular",
  dotOnly = false,
  invisible = false,
  max = 99,
  showZero = false,
  badgeContent = 0,
  ...props
}) => {
  return (
    <BadgeParent
      horizontalPosition={horizontalPosition}
      verticalPosition={verticalPosition}
      color={color}
      shape={shape}
      dotOnly={dotOnly}
      sx={sx}
      {...props}
    >
      {children}
      {!invisible &&
        (badgeContent >= 0 || (showZero && badgeContent === 0)) && (
          <div className={"badgeContent"}>
            {!dotOnly ? (
              <Fragment>
                {badgeContent > max ? `${max}+` : badgeContent}
              </Fragment>
            ) : (
              ""
            )}
          </div>
        )}
    </BadgeParent>
  );
};
export default Badge;
