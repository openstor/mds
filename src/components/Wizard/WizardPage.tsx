// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React from "react";
import get from "lodash/get";
import styled from "styled-components";
import Button from "../Button/Button";
import Box from "../Box/Box";
import Loader from "../Loader/Loader";
import { WizardButton, WizardConstruct, WizardPageProps } from "./Wizard.types";

const WizardPageMain = styled.div<WizardConstruct>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "& .wizardComponent": {
    overflowY: "auto",
    marginBottom: 10,
    height: "calc(100vh - 100px - 80px)",
    minHeight: 400,
    flex: 1,
    width: "100%",
  },
  "& .wizardModal": {
    overflowY: "auto",
    overflowX: "hidden",
    margin: "10px 0",
    minHeight: 350,
    maxHeight: "calc(100vh - 515px)",
    padding: "15px",
    position: "relative",
  },
  "& .buttonsContainer": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start" as const,
    padding: "10px 0",
    borderTop: `1px solid ${get(theme, "borderColor", "#E2E2E2")}`,
    "& button": {
      marginLeft: 10,
    },
    "&.forModal": {
      paddingBottom: 0,
    },
  },
  "& .buttonInnerContainer": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 15,
  },
}));

const WizardPage = ({
  page,
  pageChange,
  loadingStep,
  forModal,
}: WizardPageProps) => {
  const buttonAction = (btn: WizardButton) => {
    switch (btn.type) {
      case "next":
        pageChange("++");
        break;
      case "back":
        pageChange("--");
        break;
      case "to":
        pageChange(btn.toPage || 0);
        break;
      case "custom":
      default:
    }

    if (btn.action) {
      btn.action(pageChange);
    }
  };

  return (
    <WizardPageMain>
      <Box className={forModal ? "wizardModal" : "wizardComponent"}>
        {page.componentRender}
      </Box>
      {loadingStep && (
        <Box>
          <Loader />
        </Box>
      )}
      <Box className={`buttonsContainer ${forModal ? "forModal" : ""}`}>
        <Box className={"buttonInnerContainer"}>
          {page.buttons.map((btn) => {
            if (btn.componentRender) {
              return btn.componentRender;
            }
            return (
              <Button
                id={"wizard-button-" + btn.label}
                variant="regular"
                onClick={() => {
                  buttonAction(btn);
                }}
                disabled={!btn.enabled}
                key={`button-${page.label}-${btn.label}`}
                label={btn.label}
              />
            );
          })}
        </Box>
      </Box>
    </WizardPageMain>
  );
};

export default WizardPage;
