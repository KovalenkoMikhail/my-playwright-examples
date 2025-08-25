import { Page, expect } from "@playwright/test";

export async function login(page: Page) {
  // Ищем кнопку логина
  const loginButton = page
    .locator(
      'button:has-text("Login"), a:has-text("Login"), [data-testid="login-button"]'
    )
    .first();

  if (await loginButton.isVisible()) {
    await loginButton.click();

    // Заполняем форму логина
    const emailInput = page
      .locator(
        'input[type="email"], input[name="email"], input[placeholder*="email"], input[placeholder*="Email"]'
      )
      .first();
    const passwordInput = page
      .locator('input[type="password"], input[name="password"]')
      .first();

    if ((await emailInput.isVisible()) && (await passwordInput.isVisible())) {
      const email = process.env.BASIC_USER || process.env.BASIC_AUTH_USERNAME || "forvana-dev";
      const password = process.env.BASIC_PASS || process.env.BASIC_AUTH_PASSWORD || "devFRV2025!";
      await emailInput.fill(email);
      await passwordInput.fill(password);

      const submitButton = page
        .locator(
          'button[type="submit"], button:has-text("Login"), input[type="submit"]'
        )
        .first();
      await submitButton.click();

      // Ждем успешной авторизации
      await page.waitForTimeout(2000);
    }
  }
}

export async function logout(page: Page) {
  // Ищем кнопку логаута
  const logoutButton = page
    .locator(
      'button:has-text("Logout"), a:has-text("Logout"), [data-testid="logout-button"]'
    )
    .first();

  if (await logoutButton.isVisible()) {
    await logoutButton.click();
    await page.waitForTimeout(1000);
  }
}
