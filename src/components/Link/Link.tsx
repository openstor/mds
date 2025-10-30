// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import { lightColors } from "../../global/themes";
import { LinkProps } from "./Link.types";

const LinkBase = styled.a<LinkProps>(({ theme, sx }) => ({
  cursor: "pointer",
  display: "inline-flex",
  backgroundColor: "transparent",
  border: 0,
  padding: 0,
  color: get(theme, "linkColor", lightColors.linkColor),
  textDecoration: "none",
  fontSize: "inherit",
  "&:visited": {
    color: get(theme, "linkColor", lightColors.linkColor),
  },
  "&:hover": {
    textDecoration: "underline",
    color: get(theme, "linkColor", lightColors.linkColor),
  },
  ...sx,
}));

const Link: FC<LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  sx,
  children,
  ...props
}) => {
  return (
    <LinkBase {...props} sx={sx}>
      {children}
    </LinkBase>
  );
};

export default Link;
