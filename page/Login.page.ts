import { Page } from "@playwright/test";

export default class LoginPage {
    private page:Page;
    constructor(page:Page){
        this.page = page;
    }

    // locators.

    elementEmail = async() => this.page.$("input[name='email']");
    /* public get elementEmail() {
        const elemEmail = this.page.$("input[name='email']");
        if (elemEmail != null)
            return elemEmail;
        else
        throw new Error("No Email element");

    } */

        /*    public get elementPassword() {
        const elemPassword = this.page.$("input[name='password']");
        if (elemPassword != null)
            return elemPassword;
        else
        throw new Error("No Password element");
    
    }*/
   elementPassword = async () => this.page.$("input[name='password']");

   /* public get elementLoginButton() {
        const elemLoginButton =  this.page.$("//button[text()='LOGIN']");
        if (elemLoginButton != null)
            return elemLoginButton;
        else
        throw new Error("No Login Button");*/
    elementLoginButton = async () => this.page.$("//button[text()='LOGIN']");

    elementForgottenpasswordButton = async () => this.page.$("//button[contains(., 'Forgotten password')]");
    
    


    public  async enterUserName(name:string) {
        const eleEmail = await this.elementEmail();
        await eleEmail?.fill(name);
    }

    public async enterPassword(password:string) {
        const elePassword = await this.elementPassword();
        await elePassword?.fill(password);
    }

    public async clickLoginBtn() {
        const eleLogin = await this.elementLoginButton();
        eleLogin?.click();
    }

    public async clickForgotPasswordBtn() {
        const eleForgot= await this.elementForgottenpasswordButton();
        eleForgot?.click();
        console.log("Clicked on Forgot password");
    }


    public async performLogin(username:string, password:string) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }
    }

