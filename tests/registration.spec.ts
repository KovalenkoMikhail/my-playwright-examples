import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import * as registrationPage from "../pages/registrationPage";

import { beforeEach } from "node:test";

test.describe("Registration form // Positive cases", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await registrationPage.goToRegistration(page);
  });

  test("Registration without Welcome Offers", async ({ page }) => {
    await registrationPage.firstRegistrationStep(page);
    await registrationPage.secondRegistrationStep(page);
    await registrationPage.thirdRegistrationStep(page);
  });

  test("Button go back", async ({ page }) => {
    await registrationPage.firstRegistrationStep(page);
    await registrationPage.secondRegistrationStep(page);
    await registrationPage.thirdRegistrationStep(page);
    await registrationPage.goBackBtn(page);
  });

  test("Validate elements // cancelRegistration modal", async ({ page }) => {
    await registrationPage.cancelRegistrationModal(page);
  });

  test("Cancel registration", async ({ page }) => {
    await registrationPage.cancelRegistration(page);
  });

  test("Continue registrations //cancelRegistration modal", async ({
    page,
  }) => {
    await registrationPage.cancelRegistration(page);
  });

  test("Go to main page by Logo", async ({ page }) => {
    await registrationPage.clickToLogo(page);
  });
});

test.describe("Registration form // Negative cases", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await registrationPage.goToRegistration(page);
  });

  test("Create account with empty input // 1 step", async ({ page }) => {
    await registrationPage.createAccountWithEmptyInputFirstStep(page);
  });

  test("Create account without pass // 1 step", async ({ page }) => {
    await registrationPage.createAccWithoutPass(page);
  });

  test("Create account with pass equal email // 1 step", async ({ page }) => {
    await registrationPage.createWithPassEqualEmail(page);
  });

  test("Check elements // 1 step", async ({ page }) => {
    await registrationPage.showPass(page);
    await registrationPage.elements1StepRegistration(page);
  });

  test("Go to login from registration form // 1 step", async ({ page }) => {
    await registrationPage.goToLoginForm(page);
  });

  test("Check elements // 2 step", async ({ page }) => {
    await registrationPage.firstRegistrationStep(page);
    await registrationPage.checkElements2StepRegistration(page);
  });

  test("Validation empty input // 2 step", async ({ page }) => {
    await registrationPage.firstRegistrationStep(page);
    await registrationPage.createAccountWithEmptyInputSecondStep(page);
  });
});
