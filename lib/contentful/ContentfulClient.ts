import "server-only";

import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || "master";

export const isContentfulConfigured = Boolean(space && accessToken);

export const contentfulClient = isContentfulConfigured
  ? createClient({
      space: space!,
      environment,
      accessToken: accessToken!,
    })
  : null;
