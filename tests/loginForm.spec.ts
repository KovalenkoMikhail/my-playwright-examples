import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as loginPage from "../pages/loginPage";

import { beforeEach } from "node:test";

test.describe("Login Form", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
  });

  test("Reset Password", async ({ page }) => {
    await loginPage.resetPassword(page);
  });
});
