// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import styled from "styled-components";
import { ValuePairCommon, ValuePairProps } from "./ValuePair.types";
import Box from "../Box/Box";
import get from "lodash/get";
import { breakPoints } from "../../global/utils";

const ValuePairBase = styled.div<ValuePairCommon>(
  ({ theme, sx, direction }) => ({
    display: "flex",
    flexDirection: direction,
    gap: direction === "row" ? 5 : 2,
    "& .label": {
      fontWeight: "bold",
    },
    "& .value": {
      fontWeight: "normal",
    },
    [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
      flexDirection: "column",
    },
    ...sx,
  }),
);

const ValuePair: FC<ValuePairProps> = ({
  value = null,
  label = "-",
  direction = "column",
  sx,
}) => {
  return (
    <ValuePairBase sx={sx} direction={direction}>
      <Box className={"label"}>{label}</Box>
      <Box className={"value"}>{value}</Box>
    </ValuePairBase>
  );
};

export default ValuePair;
