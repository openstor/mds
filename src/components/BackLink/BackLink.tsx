// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { BackLinkProps } from "./BackLink.types";
import BackSettingsIcon from "../Icons/BackSettingsIcon";

const BackLinkBasic = styled.button<BackLinkProps>(({ theme, sx }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  justifyContent: "center",
  flexDirection: "row",
  height: "30px",
  paddingLeft: 0,
  background: "transparent",
  border: 0,
  cursor: "pointer",
  "& .label": {
    color: get(theme, "backLink.color", "#073052"),
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1,
    paddingTop: 1,
    marginRight: 10,
  },
  "&:hover .icon": {
    background: get(theme, "backLink.hover", "#eaedee"),
    borderRadius: "2px",
  },
  "& .icon": {
    lineHeight: 1,
    marginRight: "3px",
    display: "flex",
    alignItems: "center",
    width: "28px",
    height: "30px",

    "& .min-icon": {
      width: "17px",
      height: "11px",
      margin: "auto",
      color: get(theme, "backLink.arrow", "#081C42"),
    },
  },
  ...sx,
}));

const BackLink: FC<BackLinkProps> = ({ label, sx, ...props }) => {
  return (
    <BackLinkBasic sx={sx} {...props}>
      <span className={"icon"}>
        <BackSettingsIcon />
      </span>
      <span className={"label"}>{label}</span>
    </BackLinkBasic>
  );
};

export default BackLink;
