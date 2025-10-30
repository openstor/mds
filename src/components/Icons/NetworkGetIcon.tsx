// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


import React, { SVGProps } from "react";

const NetworkGetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 15 15"
      {...props}
    >
      <path
        d="M7.5,0h0A7.5,7.5,0,0,0,0,7.5H0A7.5,7.5,0,0,0,7.5,15h0a7.5,7.5,0,0,0,0-15M9.978,9.776l-1.9,1.9a.819.819,0,0,1-1.166,0h0L5.022,9.776a.773.773,0,0,1-.186-.864.875.875,0,0,1,.779-.541.793.793,0,0,1,.565.247l.5.5V3.9a.818.818,0,0,1,1.636,0V9.119l.5-.5a.79.79,0,0,1,.564-.248.872.872,0,0,1,.779.541.772.772,0,0,1-.185.864"
        transform="translate(15 15) rotate(180)"
      />
    </svg>
  );
};

export default NetworkGetIcon;
