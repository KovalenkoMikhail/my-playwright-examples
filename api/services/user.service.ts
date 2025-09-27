import { APIRequestContext } from "@playwright/test";
import fs from "fs";
import path from "path";
import { getStorageStatePath } from "../../utils/getCredentials";
import { CONFIG } from '../../config/config';

export async function apiLoginAndSaveStorage(request: APIRequestContext) {
  const responseApi = await request.post(`${CONFIG.baseUrl}/api/auth/v2/login`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      email: CONFIG.credentials.email,
      password: CONFIG.credentials.password,
    }
  );

  // Добавим проверку ответа
  if (!responseApi.ok()) {
    console.log("Status:", responseApi.status());
    console.log("Status text:", responseApi.statusText());
    const text = await responseApi.text();
    console.log("Response:", text);
    throw new Error(`API request failed with status ${responseApi.status()}`);
  }

  const loginData = await responseApi.json();

  const storageState = {
    cookies: [
      {
        name: "sessionId",
        value: loginData.sessionid,
        domain: "www.hopa.com",
        path: "/",
        expires: -1,
        httpOnly: false,
        secure: true,
        sameSite: "Lax",
      },
    ],
    origins: [
      {
        origin: "https://www.hopa.com",
        localStorage: [
          { name: "userid", value: String(loginData.userid) },
          { name: "username", value: loginData.username },
          { name: "email", value: loginData.email },
          { name: "country", value: loginData.country },
          { name: "currency", value: loginData.currency },
          { name: "language", value: loginData.language },
          { name: "macroLanguage", value: loginData.macroLanguage },
          { name: "balance", value: String(loginData.balance) },
          { name: "balances", value: JSON.stringify(loginData.balances) },
          { name: "requestid", value: loginData.requestid },
          { name: "lastLogin", value: loginData.lastLogin },
        ],
      },
    ],
  };

  const outputDir = path.join(__dirname, "../../test-results/auth");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const authFile = getStorageStatePath(undefined, undefined, undefined, "apiAuth");
  fs.writeFileSync(authFile, JSON.stringify(storageState, null, 2));

  return loginData;
}