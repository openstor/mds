// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { LogoBaseProps } from "./LogoBase.types";

const LogoBase = styled.svg<SVGProps<any> & LogoBaseProps>((props) => {
  let mainColor = get(props, "theme.logoLabelColor", "#000");
  let contrast = get(props, "theme.logoContrast", "#fff");

  if (props.inverse) {
    mainColor = get(props, "theme.logoLabelInverse", "#fff");
    contrast = get(props, "theme.logoContrastInverse", "#000");
  }

  return {
    "& .minioSection": {
      fill: get(props, `theme.logoColor`, "#C51C3F"),
    },
    "& .minioApplicationName": {
      fill: mainColor,
    },
    "& .contrast": {
      fill: contrast,
    },
  };
});

export default LogoBase;
