// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { FC } from "react";
import Tooltip from "../Tooltip/Tooltip";
import CloudIcon from "../Icons/CloudIcon";
import ConsoleIcon from "../Icons/ConsoleIcon";
import DisableIcon from "../Icons/DisableIcon";
import FormatDriveIcon from "../Icons/FormatDriveIcon";
import IAMPoliciesIcon from "../Icons/IAMPoliciesIcon";
import PreviewIcon from "../Icons/PreviewIcon";
import ShareIcon from "../Icons/ShareIcon";
import EditIcon from "../Icons/EditIcon";
import TrashIcon from "../Icons/TrashIcon";
import DownloadIcon from "../Icons/DownloadIcon";
import IconButton from "../IconButton/IconButton";
import {
  actionsTypes,
  IActionButton,
  PredefinedActionTypes,
} from "./DataTable.types";

export const isPredefinedAction = (val: any): val is PredefinedActionTypes =>
  actionsTypes.includes(val);

const defineIcon = (type: PredefinedActionTypes) => {
  switch (type) {
    case "view":
      return <PreviewIcon />;
    case "edit":
      return <EditIcon />;
    case "delete":
      return <TrashIcon />;
    case "description":
      return <IAMPoliciesIcon />;
    case "share":
      return <ShareIcon />;
    case "cloud":
      return <CloudIcon />;
    case "console":
      return <ConsoleIcon />;
    case "download":
      return <DownloadIcon />;
    case "disable":
      return <DisableIcon />;
    case "format":
      return <FormatDriveIcon />;
    case "preview":
      return <PreviewIcon />;
  }

  return null;
};

const TableActionButton: FC<IActionButton> = ({
  type,
  onClick,
  valueToSend,
  idField,
  sendOnlyId = false,
  disabled = false,
  tooltip,
}) => {
  const valueClick = sendOnlyId ? valueToSend[idField] : valueToSend;

  const icon = isPredefinedAction(type) ? defineIcon(type) : type;
  let buttonElement = (
    <IconButton
      type={"button"}
      aria-label={typeof type === "string" ? type : ""}
      size={"30px"}
      sx={{
        margin: "0 8px",
      }}
      disabled={disabled}
      onClick={
        onClick
          ? (e) => {
              e.stopPropagation();
              if (!disabled) {
                onClick(valueClick);
              } else {
                e.preventDefault();
              }
            }
          : () => null
      }
    >
      {icon}
    </IconButton>
  );

  if (tooltip && tooltip !== "") {
    buttonElement = <Tooltip tooltip={tooltip}>{buttonElement}</Tooltip>;
  }

  if (onClick) {
    return buttonElement;
  }

  return null;
};

export default TableActionButton;
