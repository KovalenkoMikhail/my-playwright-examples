import { Page, expect } from "@playwright/test";

export async function resetPassword(page: Page) {
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Forgot password?" }).click();
  await page.getByRole("textbox", { name: "Your email address:" }).click();
  await page
    .getByRole("textbox", { name: "Your email address:" })
    .fill("testemail654@gmail.com");
  await page.getByRole("button", { name: "Send the link" }).click();

  await expect(page.getByRole("dialog", { name: "Email Sent" })).toBeVisible();

  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

  await page.getByRole("button", { name: "Login" }).click();

  await expect(
    page.getByRole("heading", { name: "Welcome Back!" })
  ).toBeVisible();
}
