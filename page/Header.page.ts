import { Page } from "@playwright/test";

export default class HeaderPage {

    private page : Page

    constructor(page: Page){
        this.page = page;

    }

    //locators
    public get elementLoginButton() {
        // this locator  is like a link button
        const element = this.page.$("text=Log in");
        if (element != null)
            return element;
        else throw new Error("No login element");
    }

    public get elementSignOutButton() {
        // this locator  is like a link button
        const element = this.page.$("text=Sign out");
        if (element != null)
            return element;
        else throw new Error("No Sign out element");
    }

    //actions.

    public async clickLoginLink() {
        const clickLogin = await this.elementLoginButton;
        await clickLogin?.click();

    }

    public async clickSignOutButton() {
        const clickSignout = await this.elementSignOutButton;
        await clickSignout?.click();

    }
}