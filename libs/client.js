import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "imoken",
  apiKey: process.env.API_KEY,
});
