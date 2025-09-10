// // test/fixtures/baseTest.ts
// import { test as base } from "@playwright/test";
// import CasinoPage from "../../pages/casinoPage";
// import MainPage from "../../pages/mainPage";

// // 1. Define the types for your custom fixtures. This is for TypeScript.
// type MyFixtures = {
//   casinoPage: CasinoPage;
//   mainPage: MainPage;
// };

// // 2. Extend the base Playwright "test" object with your custom fixtures.
// export const test = base.extend<MyFixtures>({
//   // 3. Create a custom fixture for the CasinoPage.
//   // The `page` is provided by Playwright, and you return a new instance of your class.
//   casinoPage: async ({ page }, use) => {
//     const casinoPage = new CasinoPage(page);
//     await use(casinoPage);
//   },

//   // 4. Create a custom fixture for the MainPage.
//   mainPage: async ({ page }, use) => {
//     const mainPage = new MainPage(page);
//     await use(mainPage);
//   },
// });
