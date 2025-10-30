// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, Fragment } from "react";
import get from "lodash/get";
import styled from "styled-components";
import { ActionLinkProps, BaseActionLinkProps } from "./ActionLink.types";
import { lightColors } from "../../global/themes";
import Loader from "../Loader/Loader";

const ActionLinkBase = styled.button<BaseActionLinkProps>(({ theme, sx }) => ({
  cursor: "pointer",
  display: "inline-flex",
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
  color: get(theme, "linkColor", lightColors.linkColor),
  textDecoration: "none",
  fontSize: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
  ...sx,
}));

const ActionLink: FC<
  ActionLinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label = "", isLoading = false, sx, children, ...props }) => {
  return (
    <ActionLinkBase {...props} sx={sx}>
      {isLoading ? (
        <Loader style={{ width: 16, height: 16 }} />
      ) : (
        <Fragment>
          {label}
          {children}
        </Fragment>
      )}
    </ActionLinkBase>
  );
};

export default ActionLink;
