import { type Page, type Locator, expect } from '@playwright/test';
import messages from '../utils/messages';


class LoginPgae {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly messagePanel: Locator;
    readonly password: Locator;
    readonly userName: Locator;

    constructor(page:Page){
        this.page = page;
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.messagePanel = page.locator('#output');
    }
}