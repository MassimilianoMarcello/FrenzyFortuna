// sanity/sanity.client.ts

import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: '8vl19vuu',
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);
export const apiVersion = config.apiVersion;
export const dataset = config.dataset;
export const projectId = config.projectId;


export default client;