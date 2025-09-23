// pages/casinoPage.ts
import { Page, Locator, expect } from "@playwright/test";

export class hyperStarMultichasePage{
  readonly page: Page;
  readonly iFrame: Locator;
  readonly playButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iFrame = page.locator('#game-iframe').contentFrame().locator('#gameContainer iframe').contentFrame();
    this.playButton = page.getByText('CLICK ANYWHERE TO CONTINUE');
  }

  async clickToContinue() {
   await this.iFrame.playButton.click();
 
  }

}
//await page.locator('#game-iframe').contentFrame().locator('#gameContainer iframe')
        // .contentFrame().getByText('CLICK ANYWHERE TO CONTINUE').click();
