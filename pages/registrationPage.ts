import { Page, expect } from "@playwright/test";

export async function firstRegistrationStep(page: Page) {
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testemail@test.test");
  await page.getByRole("textbox", { name: "Username" }).fill("WHGTestYellow");
  await page.getByRole("textbox", { name: "Password" }).fill("ThisIsPassword@");
  await page.getByRole("button", { name: "Create account" }).click();
  await expect(
    await page.getByRole("tab", { name: "Step 1 completed" })
  ).toBeVisible();
}

export async function secondRegistrationStep(page: Page) {
  await page.getByRole("combobox", { name: "Title" }).click();
  await page.getByRole("option", { name: "Mr." }).click();
  await page.getByRole("textbox", { name: "First name" }).fill("testAuto");
  await page
    .getByRole("textbox", { name: "Last name" })
    .fill("WHGTestLastNane");

  await page
    .locator("div")
    .filter({ hasText: /^Date of birth$/ })
    .getByLabel("Open")
    .click();
  await page.getByRole("option", { name: "2007" }).click();

  await page.getByRole("combobox", { name: "MM" }).click();
  await page.getByRole("option", { name: "Jan" }).click();

  await page.getByRole("combobox", { name: "DD", exact: true }).click();
  await page.getByRole("option", { name: "1", exact: true }).click();

  await page
    .getByRole("textbox", { name: "Phone number" })
    .fill("70 0090 0123");

  await page
    .getByRole("combobox", { name: "Address" })
    .fill("Sherlock Holmes Museum 221B");

  await page
    .getByRole("textbox", { name: "Apartment, suite, etc. (" })
    .fill("221B Baker Street");

  await page.getByRole("textbox", { name: "City" }).fill("London");
  await page.getByRole("textbox", { name: "ZIP code" }).fill("123441244");

  await page.getByRole("button", { name: "Continue" }).click();
  await expect(
    await page.getByRole("tab", { name: "Step 2 completed" })
  ).toBeVisible();
}

export async function thirdRegistrationStep(page: Page) {
  await page
    .getByText(
      "Receive exclusive bonuses & promotional offersYou can change your marketing"
    )
    .isVisible();
  await page
    .getByText(
      "Receive exclusive bonuses & promotional offersYou can change your marketing"
    )
    .click();
  await expect(
    await page.getByText("How would you like to receive")
  ).toBeVisible();
  await page.getByRole("checkbox", { name: "Check all" }).click();
  // check check-boxes Hopa Casino
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_email' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_sms' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_phone' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_brandMarketing_post' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  // check check-boxes Partner Casinos
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_email' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_sms' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_phone' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_crossMarketing_post' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  // check check-boxes Hopa Sports
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_email' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_sms' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_phone' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsBrandMarketing_post' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  // check check-boxes Partner Sports
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_email' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_sms' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_phone' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();
  await expect(
    await page.locator(
      "//span[@data-cy='RegisterPage_MarketingStep_MarketingPreferencesCheckbox_sportsCrossMarketing_post' and contains(@class, 'Mui-checked')]"
    )
  ).toBeVisible();

  await page.getByText("I accept the terms, funds and").isVisible();

  await page
    .getByRole("checkbox", { name: "I accept the terms, funds and" })
    .check();

  await expect(
    await page.getByText("I accept the terms, funds and")
  ).toHaveValue("true");
}
export async function goToRegistration(page: Page) {
  await page.getByRole("button", { name: "Join", exact: true }).click();
  await page.getByRole("button", { name: "Skip" }).click();
}

export async function createAccountWithEmptyInputFirstStep(page: Page) {
  await page.getByRole("button", { name: "Create account" }).click();

  await expect(
    await page.locator("#email").getByText("This field is required.")
  ).toBeVisible();
  await expect(
    await page.locator("#username").getByText("This field is required.")
  ).toBeVisible();

  await expect(await page.getByText("At least 8 characters")).toBeVisible();
  await expect(
    await page.getByText("At least 1 uppercase letter")
  ).toBeVisible();
  await expect(
    await page.getByText("At least 1 special sign from")
  ).toBeVisible();
  await expect(
    await page.getByText("Cannot be the same as email")
  ).toBeVisible();
}

export async function createAccWithoutPass(page: Page) {
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testemail@test.test");
  await page.getByRole("textbox", { name: "Username" }).fill("WHGTestYellow");

  await page.getByRole("button", { name: "Create account" }).click();
  await expect(
    await page.getByText("At least 8 characters").getByTestId("CloseIcon")
  ).toBeVisible();

  await expect(
    await page.getByText("At least 1 uppercase letter").getByTestId("CloseIcon")
  ).toBeVisible();

  await expect(
    await page
      .getByText("At least 1 special sign from")
      .getByTestId("CloseIcon")
  ).toBeVisible();
}

export async function createWithPassEqualEmail(page: Page) {
  await page
    .getByRole("textbox", { name: "Email" })
    .fill("testemail@test.test");
  await page.getByRole("textbox", { name: "Username" }).fill("WHGTestYellow");
  await page
    .getByRole("textbox", { name: "Password" })
    .fill("testemail@test.test");

  await page.getByRole("button", { name: "Create account" }).click();

  await expect(
    await page.getByText("Cannot be the same as email").getByTestId("CloseIcon")
  ).toBeVisible();
  await expect(
    await page.getByRole("tab", { name: "Step 1 current" })
  ).toBeVisible();
}

export async function showPass(page: Page) {
  await page.getByRole("button", { name: "Show password" }).click();

  await expect(
    await page.getByRole("button", { name: "Hide password" })
  ).toBeVisible();
}
export async function elements1StepRegistration(page: Page) {
  await expect(
    await page.getByRole("tab", { name: "Step 1 current" })
  ).toBeVisible();

  await expect(await page.getByRole("tab", { name: "Step 2" })).toBeVisible();

  await expect(
    await page.getByRole("tab", { name: "Final Step" })
  ).toBeVisible();

  await expect(
    await page.getByRole("heading", { name: "SIGN UP" })
  ).toBeVisible();

  await expect(
    await page.getByRole("textbox", { name: "Email" })
  ).toBeVisible();

  await expect(
    await page.getByRole("textbox", { name: "Username" })
  ).toBeVisible();

  await expect(
    await page.getByRole("textbox", { name: "Password" })
  ).toBeVisible();

  await expect(
    await page.getByText("Already have an account? Log")
  ).toBeVisible();
}

export async function goToLoginForm(page: Page) {
  await page.getByRole("link", { name: "Log in" }).click();
  await expect(
    await page.getByRole("heading", { name: "Welcome Back!" })
  ).toBeVisible();
  await expect(await page.getByRole("button", { name: "Login" })).toBeVisible();
}

export async function checkElements2StepRegistration(page: Page) {
  await expect(
    await page.getByRole("combobox", { name: "Title" })
  ).toBeVisible();
  await expect(
    await page.getByRole("textbox", { name: "First name" })
  ).toBeVisible();
  await expect(
    await page.getByRole("textbox", { name: "Last name" })
  ).toBeVisible();
  await expect(
    await page.getByRole("combobox", { name: "Date of birth" })
  ).toBeVisible();
  await expect(await page.getByRole("combobox", { name: "MM" })).toBeVisible();
  await expect(
    await page.getByRole("combobox", { name: "DD", exact: true })
  ).toBeVisible();
  await expect(
    await page.getByRole("textbox", { name: "Phone number" })
  ).toBeVisible();
  await expect(
    await page.locator("div").filter({ hasText: /^Country$/ })
  ).toBeVisible();
  await expect(
    await page.locator("div").filter({ hasText: /^Currency$/ })
  ).toBeVisible();
  await expect(
    await page.getByRole("combobox", { name: "Address" })
  ).toBeVisible();
  await expect(
    await page.getByRole("textbox", { name: "Apartment, suite, etc. (" })
  ).toBeVisible();
  await expect(await page.getByRole("textbox", { name: "City" })).toBeVisible();
  await expect(
    await page.getByRole("textbox", { name: "ZIP code" })
  ).toBeVisible();
  await expect(
    await page.getByRole("button", { name: "Go back" })
  ).toBeVisible();

  await expect(
    await page.getByRole("tab", { name: "Step 2 current" })
  ).toBeVisible();
  await expect(
    await page.getByRole("tab", { name: "Final Step" })
  ).toBeVisible();
  await expect(
    await page.getByRole("tab", { name: "Step 1 completed" })
  ).toBeVisible();
}

export async function createAccountWithEmptyInputSecondStep(page: Page) {
  await page.getByRole("button", { name: "Continue" }).click();

  await expect(
    await page.locator("#gender").getByText("This field is required.")
  ).toBeVisible();

  await expect(
    await page.locator("#firstName").getByText("This field is required.")
  ).toBeVisible();

  await expect(
    await page.locator("#lastName").getByText("This field is required.")
  ).toBeVisible();

  await expect(await page.getByText("Please select valid date.")).toBeVisible();

  await expect(await page.getByText("Please enter valid phone")).toBeVisible();

  await expect(
    await page.locator("#city").getByText("This field should have at")
  ).toBeVisible();
  await expect(
    await page
      .locator("#addressAutocomplete")
      .getByText("This field should have at")
  ).toBeVisible();

  await expect(await page.getByText("ZIP code should be 4-9")).toBeVisible();
}

export async function goBackBtn(page: Page) {
  await expect(
    await page.getByRole("tab", { name: "Final Step, Current" })
  ).toBeVisible();
  await page.getByRole("button", { name: "Go back" }).click();

  await expect(
    await page.getByRole("tab", { name: "Step 2 current" })
  ).toBeVisible();

  await page.getByRole("button", { name: "Go back" }).click();

  await expect(
    await page.getByRole("tab", { name: "Step 1 current" })
  ).toBeVisible();
}
export async function cancelRegistrationModal(page: Page) {
  const cancelBtn = await page.getByRole("button", { name: "Cancel" });

  if (await cancelBtn.isVisible()) {
    await cancelBtn.click();
  } else {
    await page.getByTestId("ArrowBackIcon").click();
  }

  await expect(
    await page.getByRole("heading", { name: "WAIT A MOMENT..." })
  ).toBeVisible();

  await expect(
    await page.getByRole("button", { name: "Continue registration" })
  ).toBeVisible();

  await expect(
    await page.getByRole("button", { name: "Not now" })
  ).toBeVisible();
}

export async function cancelRegistration(page: Page) {
  const cancelBtn = await page.getByRole("button", { name: "Cancel" });

  if (await cancelBtn.isVisible()) {
    await cancelBtn.click();
  } else {
    await page.getByTestId("ArrowBackIcon").click();
  }
  await page.getByText("dialog Chat with usJoin").isVisible();

  await page.getByRole("button", { name: "Not now" }).click();

  await expect(await page.getByText("dialog Chat with usJoin")).toBeHidden();
  await expect(
    await page.getByRole("navigation", { name: "Main navigation" })
  ).toBeVisible();
}
export async function clickToLogo(page: Page) {
  await page.getByRole("link", { name: "Hopa Logo" }).click();
  await expect(
    await page.getByRole("navigation", { name: "Main navigation" })
  ).toBeVisible();
}
