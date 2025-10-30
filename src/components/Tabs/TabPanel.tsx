// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import Box from "../Box/Box";
import { TabPanelProps } from "./Tabs.types";

const TabPanel: FC<TabPanelProps> = ({
  selectedTab,
  useRouteTabs,
  id,
  children,
}) => {
  if (!useRouteTabs && selectedTab !== id) {
    return null;
  }

  return <Box id={id}>{children}</Box>;
};

export default TabPanel;
