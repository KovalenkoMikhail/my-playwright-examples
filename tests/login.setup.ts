import * as auth from "../modals/auth";
import * as cookies from "../modals/components/cookies";
import * as homepage from "../modals/homepage";
import { test } from "@playwright/test";

test("login user and save storageState", async ({ page }) => {
  await homepage.openHomePage(page);
  await cookies.acceptCookiesIfVisible(page);
  await auth.login(page);

  await page
    .context()
    .storageState({ path: "test-results/storage-state.json" });
});
