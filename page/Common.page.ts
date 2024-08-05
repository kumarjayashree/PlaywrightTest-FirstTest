import { Page } from "@playwright/test";

export default class CommonFunctions{
    private page:Page
    constructor(page: Page) {
        this.page = page;
    }

    Toaster = async () => this.page.waitForSelector("//div[@class='toast-top-right toast-container']");

   /* public get Toaster() {
        // there is a loader. the waitforselector will wait until the selector is loaded.
        const toaster = 
        if (toaster)
            return toaster;
        else
            throw new Error("No toaster element found");
    }*/

}