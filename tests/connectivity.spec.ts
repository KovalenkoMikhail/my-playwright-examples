import { test, expect } from '@playwright/test';

test('smoke: baseURL responds and body renders', async ({ page, request, baseURL }) => {
  const url = baseURL || '/';
  const resp = await request.get(url);
  expect(resp.ok()).toBeTruthy();

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('body')).toBeVisible();
});
