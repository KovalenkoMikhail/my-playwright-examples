import * as auth from "../modals/auth";
import * as cookies from "../modals/components/cookies";
import * as homepage from "../modals/homepage";
import { test } from "@playwright/test";
import { getStorageStatePath } from "../utils/getCredentials";
import { TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION } from "../utils/constants";

const storagePath = getStorageStatePath(TARGET_ENV, TARGET_BRAND, TARGET_JURISDICTION);

test("login user and save storageState", async ({ page }) => {
  await homepage.openHomePage(page);
  await cookies.acceptCookiesIfVisible(page);
  await auth.login(page);

  await page.context().storageState({ path: storagePath });
});
test("login13212 user and save storageState", async ({ page }) => {

  await homepage.openHomePage(page);
  await cookies.acceptCookiesIfVisible(page);
  await auth.login(page);

  await page.context().storageState({ path: storagePath });
});
