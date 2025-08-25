import { Page } from "@playwright/test";

export async function acceptCookiesIfVisible(page: Page) {
  const acceptButton = page.getByText("I ACCEPT ADDITIONAL COOKIES", {
    exact: true,
  });

  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
}
