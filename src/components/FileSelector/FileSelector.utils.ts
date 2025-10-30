// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


export const fileProcess = (evt: any, callback: any) => {
  const file = evt.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    // reader.readAsDataURL(file) output will be something like: data:application/x-x509-ca-cert;base64,LS0tLS1CRUdJTiBDRVJUSU
    // we care only about the actual base64 part (everything after "data:application/x-x509-ca-cert;base64,")
    const fileBase64 = reader.result;
    if (fileBase64) {
      const fileArray = fileBase64.toString().split("base64,");

      if (fileArray.length === 2) {
        callback(fileArray[1]);
      }
    }
  };
};
