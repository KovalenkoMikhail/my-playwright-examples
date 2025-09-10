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
export async function openDialog(page: Page) {
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Forgot password?" }).click();

  await page.getByRole("button", { name: "Chat with us" }).click();

  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByRole("button", { name: "Start Chat" })
  ).toBeVisible();
  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByRole("button", { name: "Minimise Chat Window" })
  ).toBeVisible();
  await expect(
    await page.getByRole("button", { name: "Chat with us" })
  ).toBeVisible();
  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByText("All of this communication is")
  ).toBeVisible();

  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByText("In our FAQs this link will")
  ).toBeVisible();
  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .locator(".start-form-introduction")
  ).toBeVisible();
  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByRole("button", { name: "Minimise Chat Window" })
  ).toBeVisible();
  await page
    .locator('iframe[title="Chat support widget"]')
    .contentFrame()
    .getByRole("button", { name: "Minimise Chat Window" })
    .click();

  await expect(
    await page
      .locator('iframe[title="Chat support widget"]')
      .contentFrame()
      .getByRole("button", { name: "Start Chat" })
  ).toBeHidden();
}
