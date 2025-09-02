import { Page, expect } from "@playwright/test";

export async function changePassword(page: Page) {
  await page.getByRole("button", { name: "Profile menu" }).click();
  await page.getByRole("button", { name: "Withdraw" }).click();
  await page.getByRole("button", { name: "Personal Details" }).click();

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

  // recover main password
  await page.getByRole("button", { name: "Change" }).click();

  await page.getByPlaceholder("Your current password").fill("tiliTILI123$Test");

  await page.getByPlaceholder("Your new password").fill("tiliTILI123$");

  await page.getByRole("button", { name: "Change password" }).click();

  await expect(
    await page.getByLabel("Success").getByText("Success", { exact: true })
  ).toBeVisible();
}
