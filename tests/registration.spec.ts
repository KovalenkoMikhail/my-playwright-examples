// import { test } from "@playwright/test";
import * as homepage from "../modals/homepage";
import * as cookies from "../modals/components/cookies";
import { getStorageStatePath } from "../utils/getCredentials";
import { test } from "./fixtures/registrationFixture";

import { beforeEach } from "node:test";

test.describe("Registration form // Positive cases", () => {
 

  test.beforeEach(async ({ registrationPage, page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await registrationPage.goToRegistration();
  });

  test("Registration without Welcome Offers", async ({ registrationPage, page }) => {
    await registrationPage.firstRegistrationStep();
    await registrationPage.secondRegistrationStep();
    await registrationPage.thirdRegistrationStep();
  });

  test("Button go back", async ({ registrationPage,page }) => {
    await registrationPage.firstRegistrationStep();
    await registrationPage.secondRegistrationStep();
    await registrationPage.thirdRegistrationStep();
    await registrationPage.goBackButton();
  });

  test("Validate elements // cancelRegistration modal", async ({ registrationPage,page }) => {
    await registrationPage.cancelRegistrationModal();
  });

  test("Cancel registration", async ({ registrationPage,page }) => {
    await registrationPage.cancelRegistration();
  });

  test("Continue registrations //cancelRegistration modal", async ({registrationPage,
    page,
  }) => {
    await registrationPage.cancelRegistration();
  });

  test("Go to main page by Logo", async ({ registrationPage,page }) => {
    await registrationPage.clickToLogo();
  });
});

test.describe("Registration form // Negative cases", () => {
  test.use({
    storageState: getStorageStatePath(undefined, undefined, undefined, "root"),
  });

  test.beforeEach(async ({ registrationPage,page }) => {
    await homepage.openHomePage(page);
    await cookies.acceptCookiesIfVisible(page);
    await registrationPage.goToRegistration();
  });

  test("Create account with empty input // 1 step", async ({ registrationPage,page }) => {
    await registrationPage.createAccountWithEmptyInputFirstStep();
  });

  test("Create account without pass // 1 step", async ({ registrationPage,page }) => {
    await registrationPage.createAccWithoutPass();
  });

  test("Create account with pass equal email // 1 step", async ({ registrationPage,page }) => {
    await registrationPage.createWithPassEqualEmail();
  });

  test("Check elements // 1 step", async ({ registrationPage,page }) => {
    await registrationPage.showPass();
    await registrationPage.elements1StepRegistration();
  });

  test("Go to login from registration form // 1 step", async ({ registrationPage,page }) => {
    await registrationPage.goToLoginForm();
  });

  test("Check elements // 2 step", async ({ registrationPage,page }) => {
    await registrationPage.firstRegistrationStep();
    await registrationPage.checkElements2StepRegistration();
  });

  test("Validation empty input // 2 step", async ({ registrationPage,page }) => {
    await registrationPage.firstRegistrationStep();
    await registrationPage.createAccountWithEmptyInputSecondStep();
  });
});
