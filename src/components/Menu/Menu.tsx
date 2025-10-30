// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC, useEffect, useState } from "react";
import { MenuProps } from "./Menu.types";
import { breakPoints } from "../../global/utils";
import HorizontalMenu from "./Horizontal/HorizontalMenu";
import VerticalMenu from "./Vertical/VerticalMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import debounce from "lodash/debounce";

const Menu: FC<MenuProps> = ({
  horizontal = false,
  mobileModeAuto = true,
  ...props
}) => {
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  useEffect(() => {
    const scrollResize = debounce(() => {
      const windowWidth = document.documentElement.offsetWidth;

      setMobileMode(windowWidth <= breakPoints.md);
    }, 400);

    window.addEventListener("resize", scrollResize);
  });

  if (mobileMode && mobileModeAuto) {
    return <MobileMenu {...props} />;
  }

  if (horizontal) {
    return <HorizontalMenu {...props} />;
  }

  return <VerticalMenu {...props} />;
};

export default Menu;
