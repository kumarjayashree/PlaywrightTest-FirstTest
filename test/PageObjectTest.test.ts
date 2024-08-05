import {test, expect, Page} from '@playwright/test';
import HeaderPage from '../page/Header.page';
import LoginPage from '../page/Login.page';
import CommonFunctions from '../page/Common.page';
import EnvPOM from '../page/Environment.page';
import * as data from '../data/login.cred.json';



test.describe("Test of Page", async()=> {

    let header:HeaderPage;
    let login:LoginPage;
    let common:CommonFunctions;

test.beforeAll( async ({browser}) => {
      /*   const page= await browser.newPage();
        await page.goto(EnvPOM.testUrl);

        //my page creation
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
 */
    })

    test("Login Positive", async({page}) => {
        await page.goto(EnvPOM.testUrl, {timeout:120000});
          //my page creation
          header = new HeaderPage(page);
          login = new LoginPage(page);
          common = new CommonFunctions(page);
  
        // verification
        expect(page.url()).toBe("https://letcode.in/");
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin");

        await login.enterUserName(data.email);
        await login.enterPassword(data.password);
        await login.clickLoginBtn();

        // if you do not use await, then the object does not contain any of eval methods
        const toaster = await common.Toaster();
        
        expect( await toaster?.textContent()).toContain("Welcome");

        await header.clickSignOutButton();

    })

    })
   