import { test, expect } from '@playwright/test';
// import AdvPage from '../pages/rozetka/advPage';

// let mainPage: MainPage;

// to refactor
test.beforeEach(async ({ page }) => {
  // await page.goto('https://ppd01-www.hopa.com/en-ca');
  await page.goto('https://testautomationpractice.blogspot.com/');
 
});

// TESTS

test('Open adv', async ({ page }) => {
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();

  page.on('dialog', dialog => console.log(dialog.message()));
  await page.getByRole('button').click(); 

});
