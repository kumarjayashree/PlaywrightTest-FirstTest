import HeaderPage from '../page/Header.page';
import LoginPage from '../page/Login.page';
import CommonFunctions from '../page/Common.page';

import{test as baseTest} from '@playwright/test';

const test= baseTest.extend<{
    //declaring variables.
    loginPage:LoginPage;
    headerPage:HeaderPage;
    commonPage:CommonFunctions;

}>({
    // call constructor
    // use is testinfo.
  
    loginPage: async({page}, use)=> {
        await use(new LoginPage(page));
    },

    headerPage: async({page}, use) => {
        await use(new HeaderPage(page));
    },

    commonPage: async({page}, use) => {
        await use(new CommonFunctions(page));
    },
}) 

export default test;
export const expect =test.expect;