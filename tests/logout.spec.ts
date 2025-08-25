import * as auth from "../modals/auth";
import * as homepage from "../modals/homepage";
import { test } from "@playwright/test";

test.describe("logout", () => {
  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
  });

  test("Logout", async ({ page }) => {
    await auth.logout(page);
  });
});
