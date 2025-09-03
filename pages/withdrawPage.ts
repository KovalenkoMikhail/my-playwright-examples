import { Page, expect } from "@playwright/test";

export async function changePassword(page: Page) {
  const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();

  const personalDetailsButton = page.getByRole("button", {
    name: "Personal Details",
  });

  const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

  if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await personalDetailsButton.click();
  } else {
    await personalDetailsButton.click();
  }

  await page.getByRole("button", { name: "Change" }).click();

  await page.getByPlaceholder("Your current password").fill("tiliTILI123$");

  await page.getByPlaceholder("Your new password").fill("tiliTILI123$Test");

  await page.getByRole("button", { name: "Change password" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeVisible();

  await page.getByRole("button", { name: "Confirm" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeHidden();

  await page.getByRole("button", { name: "Change" }).click();

  await page.getByPlaceholder("Your current password").fill("tiliTILI123$Test");

  await page.getByPlaceholder("Your new password").fill("tiliTILI123$");

  await page.getByRole("button", { name: "Change password" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeVisible();
}

export async function checkHideButton(page: Page) {
  const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();

  const personalDetailsButton = page.getByRole("button", {
    name: "Personal Details",
  });

  const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

  if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await personalDetailsButton.click();
  } else {
    await personalDetailsButton.click();
  }

  await page.getByRole("button", { name: "Change" }).click();

  await page
    .locator('[data-cy="ChangePasswordDialog_OldPasswordInputShowButton"]')
    .click();

  await expect(
    await page.locator(
      '[data-cy="ChangePasswordDialog_OldPasswordInputShowButton"]'
    )
  ).toHaveAttribute("aria-pressed", "true");

  await page
    .locator('[data-cy="ChangePasswordDialog_NewPasswordInputShowButton"]')
    .click();

  await expect(
    await page.locator(
      '[data-cy="ChangePasswordDialog_NewPasswordInputShowButton"]'
    )
  ).toHaveAttribute("aria-pressed", "true");
}

export async function openModalChangePassword(page: Page) {
  const profileButton = page.getByRole("button", { name: "Profile menu" });

  if (await profileButton.isVisible()) {
    await profileButton.click();
  } else {
    await page.locator(".sc-377eb44-0 > div:nth-child(3)").click();
  }

  await page.getByRole("button", { name: "Withdraw" }).click();

  const personalDetailsButton = page.getByRole("button", {
    name: "Personal Details",
  });

  const emptyButton = page
    .getByRole("button")
    .filter({ hasText: /^$/ })
    .first();

  if (await emptyButton.isVisible()) {
    await emptyButton.click();
    await personalDetailsButton.click();
  } else {
    await personalDetailsButton.click();
  }

  await page.getByRole("button", { name: "Change" }).click();

  await expect(
    await page.getByRole("button", { name: "Change password" })
  ).toBeVisible();
}

export async function closeModalChangePassword(page: Page) {
  await page.getByRole("button", { name: "Close the popup" }).click();
  await expect(
    await page.getByRole("button", { name: "Change password" })
  ).toBeHidden();
}
