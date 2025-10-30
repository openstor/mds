// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, HTMLAttributes } from "react";
import styled from "styled-components";
import { PageLayoutProps } from "./PageLayout.types";
import Grid from "../Grid/Grid";

const PageLayoutContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & PageLayoutProps
>(({ theme, sx, variant }) => ({
  boxSizing: "content-box",
  maxWidth: variant === "constrained" ? 1220 : "initial",
  padding: 32,
  ...sx,
}));

const PageLayout: FC<HTMLAttributes<HTMLDivElement> & PageLayoutProps> = ({
  sx,
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <PageLayoutContainer sx={sx} variant={variant} {...props}>
      <Grid container>
        <Grid item xs={12} className={className}>
          {children}
        </Grid>
      </Grid>
    </PageLayoutContainer>
  );
};

export default PageLayout;
