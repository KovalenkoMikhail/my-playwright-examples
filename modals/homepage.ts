import { Page, expect } from "@playwright/test";

export async function openHomePage(page: Page) {
  const url = process.env.BASE_URL || "/";
  await page.goto(url);
  await page.waitForLoadState("domcontentloaded");
}
