import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as withdrawPage from "../pages/withdrawPage";

import { beforeEach } from "node:test";

test.describe("Withdraw", () => {
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

  test("Check Hide Button", async ({ page }) => {
    await withdrawPage.checkHideButton(page);
  });
  test("Close modal CHANGE PASSWORD", async ({ page }) => {
    await withdrawPage.openModalChangePassword(page);
    await withdrawPage.closeModalChangePassword(page);
  });
});
