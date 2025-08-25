import { Page, expect } from "@playwright/test";

export async function openHomePage(page: Page) {
  await page.goto("https://ppd01-www.hopa.com/en-ca");
  // Ждем загрузки страницы
  await page.waitForLoadState("networkidle");
}
