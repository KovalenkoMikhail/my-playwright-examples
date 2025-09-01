import { test, expect } from "@playwright/test";
import * as apiLogin from "modals/components/apiLogin";

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

  test("loginByApi", async ({ request }) => {
    const responseApi = await request.post(apiLogin.loginUrl, {
      headers: apiLogin.loginHeaders,
      data: apiLogin.loginBody,
    });

    const body = await responseApi.json();

    console.log("sessionid:", body.sessionid);
    console.log("userid:", body.userid);
    console.log("username:", body.username);
    console.log("email:", body.email);
    console.log("country:", body.country);
    console.log("currency:", body.currency);
    console.log("language:", body.language);
    console.log("macroLanguage:", body.macroLanguage);
    console.log("balance:", body.balance);
    console.log("balances:", body.balances);
    console.log("requestid:", body.requestid);
    console.log("lastLogin:", body.lastLogin);

    expect(responseApi.ok()).toBeTruthy();

    await context.storageState({ path: "auth.json" });

    console.log(responseApi.json());
  });
});
