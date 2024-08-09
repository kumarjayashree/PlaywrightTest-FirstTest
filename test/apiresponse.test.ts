import {test} from '@playwright/test'

test('Read api response', async({page}) => {
    test.slow();
   await page.goto("https://www.weatherapi.com/api-explorer.aspx#current");


     const responsePromise = page.waitForResponse(response =>
        response.url().includes( 'https://www.weatherapi.com/getheader.aspx') && response.status() === 200
           
      );
      await page.fill("#ctl00_MainContentHolder_txtAPIKey", "<weather api key>");
      
      const locator = await page.$("//div[@id='current']//button[@type='button' and text() = 'Show Response']");
      await locator?.scrollIntoViewIfNeeded();
      await locator?.click()
      const response = await responsePromise;
      console.log((await response.body()).toString());
})


