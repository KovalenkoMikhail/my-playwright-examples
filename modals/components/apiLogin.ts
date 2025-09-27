import { Page } from "@playwright/test";

export const loginHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Accept-Encoding": "gzip, deflate, br, zstd",
  Referer: "https://www.hopa.com/",
  "Content-Type": "application/json",
  "x-aws-waf-token":
    "21c1407b-2a83-4cbd-8517-5742bc20f21e:CgoAkKd8NsTlAAAA:...",
  Origin: "https://www.hopa.com",
  Connection: "keep-alive",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "cross-site",
  Priority: "u=0",
  TE: "trailers",
  Authorization: "Basic Og==",
};

export const loginBody = {
  fingerprint: "",
  username: "preprodtesthopa47@proton.me",
  password: "tiliTILI123$",
  brand: 149,
};

// endpoint
export const loginUrl =
  "https://platform.whgstage.com/platform/usergateway/auth/login";
