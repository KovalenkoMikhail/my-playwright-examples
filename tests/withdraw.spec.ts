import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as withdrawPage from "../pages/withdrawPage";

import { beforeEach } from "node:test";

test.describe("Login Form", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "auth"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
  });

  test("Change Password", async ({ page }) => {
    await withdrawPage.changePassword(page);
  });
});
