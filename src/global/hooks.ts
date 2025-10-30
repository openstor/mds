// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import { useCallback, useEffect } from "react";

export const useEscapeKey = (handleAction: () => void) => {
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Esc") {
        handleAction();
      }
    },
    [handleAction],
  );

  useEffect(() => {
    document.addEventListener("keyup", handleEsc, false);

    return () => {
      document.removeEventListener("keyup", handleEsc, false);
    };
  }, [handleEsc]);
};

export const useEnterKey = (handleAction: () => void) => {
  const handleEnter = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleAction();
      }
    },
    [handleAction],
  );

  useEffect(() => {
    document.addEventListener("keyup", handleEnter, false);

    return () => {
      document.removeEventListener("keyup", handleEnter, false);
    };
  }, [handleEnter]);
};

export const useArrowKeys = (
  handleAction: (arrowDirection: string) => void,
) => {
  const handleArrow = useCallback(
    (event: KeyboardEvent) => {
      if (event.key?.startsWith("Arrow")) {
        event.preventDefault();
        event.stopPropagation();
        handleAction(event.key);
      }
    },
    [handleAction],
  );

  useEffect(() => {
    document.addEventListener("keyup", handleArrow, false);

    return () => {
      document.removeEventListener("keyup", handleArrow, false);
    };
  }, [handleArrow]);
};
