import { test, expect } from "@playwright/test";
import * as apiLogin from "modals/components/apiLogin";
import fs from "fs"; // file system - to write files
import path from "path";
import {
  TARGET_ENV,
  TARGET_BRAND,
  TARGET_JURISDICTION,
} from "../utils/constants";
import { getStorageStatePath } from "utils/getCredentials";

test.describe("myFirstApiRequest", () => {
  test("myApiTest", async ({ request }) => {
    const saveRespones = await request.post(
      "https://reqres.in/api-docs/#/default/post_register",
      {
        params: {
          username: "1dvp",
          email: "kaj2nf@asd.sas",
          password: "1xxxDVPxxx",
        },
      }
    );
    console.log(saveRespones);

    expect(saveRespones.ok()).toBeTruthy();
  });

  test("loginByApiI`mNotsure", async ({ request }) => {
    const responseApi = await request.post(apiLogin.loginUrl, {
      headers: apiLogin.loginHeaders,
      data: apiLogin.loginBody,
    });

    const loginData = await responseApi.json();

    console.log("sessionid:", loginData.sessionid);
    console.log("userid:", loginData.userid);
    console.log("username:", loginData.username);
    console.log("email:", loginData.email);
    console.log("country:", loginData.country);
    console.log("currency:", loginData.currency);
    console.log("language:", loginData.language);
    console.log("macroLanguage:", loginData.macroLanguage);
    console.log("balance:", loginData.balance);
    console.log("balances:", loginData.balances);
    console.log("requestid:", loginData.requestid);
    console.log("lastLogin:", loginData.lastLogin);

    expect(responseApi.ok()).toBeTruthy();

    const storageState = {
      cookies: [
        {
          name: "sessionId",
          value: loginData.sessionid,
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: true,
          sameSite: "Lax",
        },
      ],
      origins: [
        {
          origin: "https://ppd01-www.hopa.com", // The website URL
          localStorage: [
            // Get data from the login response and put it here.
            // Playwright can use this later.
            { name: "userid", value: String(loginData.userid) },
            { name: "username", value: loginData.username },
            { name: "email", value: loginData.email },
            { name: "country", value: loginData.country },
            { name: "currency", value: loginData.currency },
            { name: "language", value: loginData.language },
            { name: "macroLanguage", value: loginData.macroLanguage },
            { name: "balance", value: loginData.balance },
            { name: "balances", value: JSON.stringify(loginData.balances) },
            { name: "requestid", value: loginData.requestid },
            { name: "lastLogin", value: loginData.lastLogin },
          ],
        },
      ],
    };

    const outputDir = path.join(__dirname, "../test-results/auth");
    // Make the directory if it does not exist.
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const authFile = getStorageStatePath(
      TARGET_ENV,
      TARGET_BRAND,
      TARGET_JURISDICTION,
      "apiAuth"
    );
    fs.writeFileSync(authFile, JSON.stringify(storageState, null, 2));

    //await context.storageState({ path: "auth.json" });

    console.log(responseApi.json());
  });

  test("loginByApi", async ({ request }) => {
    const responseApi = await request.post(apiLogin.loginUrl, {
      headers: apiLogin.loginHeaders,
      data: apiLogin.loginBody,
    });

    const loginData = await responseApi.json();

    console.log("sessionid:", loginData.sessionid);
    console.log("userid:", loginData.userid);
    console.log("username:", loginData.username);
    console.log("email:", loginData.email);
    console.log("country:", loginData.country);
    console.log("currency:", loginData.currency);
    console.log("language:", loginData.language);
    console.log("macroLanguage:", loginData.macroLanguage);
    console.log("balance:", loginData.balance);
    console.log("balances:", loginData.balances);
    console.log("requestid:", loginData.requestid);
    console.log("lastLogin:", loginData.lastLogin);
    console.log("sessionCreatedOn:", loginData.sessionCreatedOn);

    expect(responseApi.ok()).toBeTruthy();

    const currentTime = Date.now();
    const loginTimestamp = new Date(loginData.lastLogin).getTime();
    const sessionCreatedTimestamp = new Date(
      loginData.sessionCreatedOn
    ).getTime();

    // Создаем динамически обновляемые значения для localStorage и cookies
    const ampUnsentValue = JSON.stringify([
      {
        user_id: Number(loginData.userid),
        device_id: "f25257f4-b2dc-4d72-bcab-2ce409f08b84",
        session_id: currentTime,
        time: currentTime,
        platform: "Web",
        language: "en-US",
        ip: "$remote",
        insert_id: "dfa0a949-95ff-4042-92a2-0912a9bd0d18",
        event_type: "login_success",
        groups: {},
        // Добавляем все необходимые данные в event_properties
        event_properties: {
          locale: {
            isDeDomain: false,
            isCoUkDomain: false,
            locale: loginData.language,
            playerState: {
              jurisdiction: "ukgc",
              country: loginData.country,
              countryCode: loginData.country,
              requestid: loginData.requestid,
              type: "determine-state",
              currencyCode: loginData.currency,
              shouldShowOntarioPopup: false,
            },
          },
          username: loginData.username,
          email: loginData.email,
          balance: loginData.balance,
          balances: loginData.balances,
        },
        event_id: 6,
        library: "amplitude-ts-gtm/3.15.0",
        user_agent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.7339.16 Safari/537.36",
      },
    ]);

    const userIdValue = `g%3A${loginData.userid}%7Ce%3Aundefined%7Cc%3A${currentTime}%7Cl%3A${currentTime}`;
    const sessionIdValue = `g%3A${loginData.sessionid}%7Ce%3A${loginTimestamp}%7Cc%3A${sessionCreatedTimestamp}%7Cl%3A${currentTime}`;
    const ampValue = `JTdCJTIyZGV2aWNlSWQlMjIlM0ElMjJmMjUyNTdmNC1iMmRjLTRkNzItYmNhYi0yY2U0MDlmMDhiODQlMjIlMkMlMjJ1c2VySWQlMjIlM0ElMjIyMjQzMjEwODczNyUyMiUyQyUyMnNlc3Npb25JZCUyMiUzQTE3NTY3NDI4OTQ4ODQlMkMlMjJvcHRPdXQlMjIlM0FmYWxzZSUyQyUyMmxhc3RFdmVudFRpbWUlMjIlM0ExNzU2NzQyODk3NjM0JTJDJTIybGFzdEV2ZW50SWQlMjIlM0E2JTJDJTIycGFnZUNvdW50ZXIlMjIlM0ExJTdE`;

    const storageState = {
      cookies: [
        {
          name: "HEADER_COUNTRY",
          value: loginData.country,
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "USER_LANG",
          value: loginData.language,
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "PROMO_CODE",
          value: "",
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "af_id",
          value: "d6950ed5-af54-40d2-9c73-f632a72b3c85-p",
          domain: ".appsflyer.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: true,
          sameSite: "None",
        },
        {
          name: "_ga",
          value: "GA1.1.999443612.1756742894",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "afUserId",
          value: "d6950ed5-af54-40d2-9c73-f632a72b3c85-p",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "af_id",
          value: "d6950ed5-af54-40d2-9c73-f632a72b3c85-p",
          domain: ".onelink.me",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: true,
          sameSite: "None",
        },
        {
          name: "AF_SYNC",
          value: "1756742894514",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "AMP_MKTG_320bb3f5df",
          value: "JTdCJTdE",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "_iidt",
          value:
            "M+UNYxSZI8TdaU9Wont2Q7gRPZl5PgDY0dAyzhuOt6gFAHYWfORfKh1o4gWvVRuY89+2kLffi3NhsA==",
          domain: ".fpjs.io",
          path: "/",
          expires: -1,
          httpOnly: true,
          secure: true,
          sameSite: "None",
        },
        {
          name: "_vid_t",
          value:
            "MUQlmAJqxRopiG03CFQxPLEgYh//4mykqT1xiKMtDKehmh88yA2lgikC8m+htN6PFCdL4pK7L488kA==",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "aws-waf-token",
          value:
            "c5fa6d87-9b46-4e23-a9aa-863e27fbe1e4:CgoApMdxHJO0AAAA:5kCjrohRAct7cuxuNwf7/zwsYC7oyQt0CZRi0IqYmmxkhG45+PffVGlIAn0CcHPE7pg0GgDUxYI9x/fhsUmtRUZ3tKQIFu+ADJ/uklKOKUZUMq5j6lh1UnxbN4E6XelKlfXk2xddwLw8zAo3LAF/ov2ucgr03Qc9YOT63vVdwwPS43wbNUK2Gawumhk0ok0dBMxFpWPiMLtPNodxPD1EMeP8SZAzVFK6yFd4byabxI38rbc9CTlvHpIvjlv4kmxbesPrZHAk",
          domain: ".ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: true,
          sameSite: "Lax",
        },
        {
          name: "cookiesOk",
          value: "1",
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "_ga_HET27Z3854",
          value: "GS2.1.s1756742893$o1$g0$t1756742896$j57$l0$h0",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "sessionId",
          value: loginData.sessionid,
          domain: "ppd01-www.hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: true,
          sameSite: "Lax",
        },
        {
          name: "AMP_320bb3f5df",
          value: ampValue,
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "ab.storage.sessionId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
          value: sessionIdValue,
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "ab.storage.deviceId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
          value:
            "g%3Aa50644e8-ffcb-f28c-7f8a-ac4ad7fc52af%7Ce%3Aundefined%7Cc%3A1756742892261%7Cl%3A1756742898772",
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
        {
          name: "ab.storage.userId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
          value: userIdValue,
          domain: ".hopa.com",
          path: "/",
          expires: -1,
          httpOnly: false,
          secure: false,
          sameSite: "Lax",
        },
      ],
      origins: [
        {
          origin: "https://ppd01-www.hopa.com",
          localStorage: [
            // Привязываем данные из API к соответствующим ключам, как в вашем примере
            { name: "AMP_unsent_320bb3f5df", value: ampUnsentValue },
            { name: "AF_SESSION", value: "1756742893259" },
            {
              name: "ab.storage.session_id_for_cached_metadata.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":"762571ef-ed05-fa38-cddf-80ad1c86fa78"}',
            },
            {
              name: "_vid_lr",
              value:
                '[["QLCzO311AXYQ","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"]]',
            },
            {
              name: "ab.storage.serverConfig.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value:
                '{"v":{"s":"5.9.1","l":1754307683,"e":["A"],"a":[],"p":[],"m":21600,"v":"BLxHBKMHDyRMRzWfPs_YLZLKzgbGALKNwkX7-pCE-Ha1-NLyir34d7q3HRX-Fu3q9i6OtcI8__G5Nfle4n8gD98=","c":{"enabled":true,"rate_limit":{"enabled":true,"capacity":5,"refill_rate":180}},"f":{"enabled":false},"grl":{"enabled":true,"capacity":30,"refill_rate":30,"endpoint_overrides":{"content_cards/sync":{"refill_rate":10,"capacity":5},"push/redeliver":{"refill_rate":180,"capacity":1},"banners/sync":{"capacity":5,"refill_rate":180}}},"b":null}}',
            },
            {
              name: "_vid_t",
              value:
                "MUQlmAJqxRopiG03CFQxPLEgYh//4mykqT1xiKMtDKehmh88yA2lgikC8m+htN6PFCdL4pK7L488kA==",
            },
            {
              name: "ab.storage.globalRateLimitCurrentTokenCount.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":30}',
            },
            {
              name: "awswaf_session_storage",
              value:
                "c5fa6d87-9b46-4e23-a9aa-863e27fbe1e4:CgoApMdxHJS0AAAA:X28GHDiYivVHpX0wyipMFTatbd6kGEbMaJnjXXjGDWRHFX6g3rHxO/1UREpj+EIzXcpC2ty2FP940s1ZW2wvxfM873xLw2EbFIxw9Liv4/uN+ioPDOrtAZEk98Qi3rLcVmFP4BIxxwxfaGB2eBk8+1e3z2awRg/Xh/l6JbCTjRKLl9frHuUl+t5V2+ysMRelvwuz5U66y4DODl+Esschpk9gVFSPbryOpLVB1NNArL/IN4HqWsRWI0q3S6FToz/0aFG0aKb2oLL2y1qTEWk8FoU0t4rHsrjkERLrvTFdVBaDD+0sHmBJjHRPJCc86vdmTI2s1EghdJMawRk8MQV3sSPZuYrC3VgtGNgkUXtnz1weXBV+bHPIkJ0ZewLxuM77aRW1P9vBaox22KvGmJQHZAbwrRWNzLHL7Zyom73Wk9BqoqMQwAD5d0vj3tsI6jehstocwsDP/Vj6oyYewNg9mNwoy3qho1jPyO7euFxI05pPzWkcb7wZlzRTbHU/uDucDA==",
            },
            {
              name: "ab.storage.deviceId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value:
                '{"v":"g:a50644e8-ffcb-f28c-7f8a-ac4ad7fc52af|e:undefined|c:1756742892261|l:1756742898772"}',
            },
            {
              name: "ab.storage.dynamicRateLimitCurrentTokenCount.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value:
                '{"v":{"data":-1,"content_cards/sync":5,"feature_flags/sync":-1,"template":-1,"banners/sync":5}}',
            },
            {
              name: "ab.storage.sdk_metadata.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":["npm"]}',
            },
            { name: "awswaf_token_refresh_timestamp", value: "1756742893562" },
            {
              name: "ab.storage.lastSdkReq.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":1756742898776}',
            },
            {
              name: "ab.storage.requestAttempts.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":{"data":1}}',
            },
            {
              name: "ab.storage.triggers.ts.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":1756742893098}',
            },
            {
              name: "ab.storage.messagingSessionStart.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":1756742892255}',
            },
            {
              name: "ab.storage.sessionId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: `{\"v\":\"${sessionIdValue}\"}`,
            },
            {
              name: "ab.storage.userId.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: `{\"v\":\"${userIdValue}\"}`,
            },
            {
              name: "ab.storage.lastReqToEndpoint.2d79e59f-f2cc-4c79-b2e5-7b0989a1d564",
              value: '{"v":{"data":1756742898776}}',
            },
          ],
        },
      ],
    };

    const outputDir = path.join(__dirname, "../test-results");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    const authFile = getStorageStatePath(
      TARGET_ENV,
      TARGET_BRAND,
      TARGET_JURISDICTION,
      "apiAuth"
    );
    fs.writeFileSync(authFile, JSON.stringify(storageState, null, 2));

    console.log(responseApi.json());
  });
});
