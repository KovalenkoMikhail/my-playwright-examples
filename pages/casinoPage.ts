// pages/casinoPage.ts
import { Page } from '@playwright/test';

class CasinoPage {
    private readonly page: Page;

   
    constructor(page: Page) {
        this.page = page;
    }

 
    async checkSubNavigation() {
        
        await this.page.getByRole('link', { name: 'Lobby' }).click();
    }
}

export default CasinoPage;