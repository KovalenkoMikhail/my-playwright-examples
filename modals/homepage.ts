import { Page, expect } from "@playwright/test";

export async function openHomePage(page: Page) {
  const url = process.env.BASE_URL || "/";
  await page.goto(url);
  await page.waitForLoadState("domcontentloaded");
}
export async function openCasinoPage(page: Page) {
  const urlCasino = process.env.BASE_URL + "/casino";
  await page.goto(urlCasino);
  await page.waitForLoadState("domcontentloaded");
}
