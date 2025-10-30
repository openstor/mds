// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import get from "lodash/get";
import Box from "../Box/Box";
import SectionTitle from "../SectionTitle/SectionTitle";
import { breakPoints } from "../../global/utils";
import { FormLayoutProps } from "./FormLayout.types";

const FormLayout: FC<FormLayoutProps> = ({
  children,
  title = "",
  helpBox,
  icon,
  sx,
  containerPadding = true,
  withBorders = true,
}) => {
  return (
    <Box
      withBorders={withBorders}
      sx={{
        display: "grid",
        padding: containerPadding ? 25 : 0,
        gap: "25px",
        gridTemplateColumns: "1fr",
        "& .inputItem:not(:last-of-type)": {
          marginBottom: 12,
        },
        [`@media (min-width: ${get(breakPoints, "md", 0)}px)`]: {
          gridTemplateColumns: helpBox ? "2fr 1.2fr" : "1fr",
        },
        ...sx,
      }}
    >
      <Box>
        {title !== "" && (
          <SectionTitle icon={icon} sx={{ marginBottom: 16 }}>
            {title}
          </SectionTitle>
        )}
        {children}
      </Box>
      {helpBox}
    </Box>
  );
};

export default FormLayout;
