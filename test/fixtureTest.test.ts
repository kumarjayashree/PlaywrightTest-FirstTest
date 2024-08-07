import test, {expect} from "../fixtures/basePages";
import * as data from "../data/login.cred.json";
import EnvPOM from '../page/Environment.page';


test("My fixture test",async({headerPage, loginPage, commonPage, page}) => {
await page.goto(EnvPOM.testUrl, {timeout:120000});
 await headerPage.clickLoginLink();
 await page.waitForSelector("input[name='email']");
 expect(page.url()).toBe("https://letcode.in/signin");

        await loginPage.enterUserName(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();

        // if you do not use await, then the object does not contain any of eval methods
        const toaster = await commonPage.Toaster();
        
        expect( await toaster?.textContent()).toContain("Welcome");

        await headerPage.clickSignOutButton();
})
