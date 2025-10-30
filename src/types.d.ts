// SPDX-FileCopyrightText: 2025 openstor contributors
// SPDX-FileCopyrightText: 2015-2025 MinIO, Inc.
// SPDX-License-Identifier: AGPL-3.0-or-later


declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";
declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
