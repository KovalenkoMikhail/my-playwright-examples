import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as registrationPage from "../pages/registrationPage";

import { beforeEach } from "node:test";

test.describe("Registration form", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
  });

  test("Registration without Welcome Offers", async ({ page }) => {
    await registrationPage.goToRegistration(page);
    await registrationPage.firstRegistrationStep(page);
    await registrationPage.secondRegistrationStep(page);
    await registrationPage.thirdRegistrationStep(page);
  });
  test("Create account with empty input // 1 step", async ({ page }) => {
    await registrationPage.goToRegistration(page);
    await registrationPage.createAccountWithEmptyInputFirstStep(page);
  });

  test("Create account without pass // 1 step", async ({ page }) => {
    await registrationPage.goToRegistration(page);
    await registrationPage.createAccWithoutPass(page);
  });

  test("Create account with pass equal email // 1 step", async ({ page }) => {
    await registrationPage.goToRegistration(page);
    await registrationPage.createWithPassEqualEmail(page);
  });
  // test("Create account without email // 1 step", async ({ page }) => {
  //   await registrationPage.goToRegistration(page);
  //   await registrationPage.createAccWithoutPass(page);
  // });
});
