import base from '../pageObjects/naukri/base';
require('dotenv').config({ path: './naukri.env' });

describe('Naukri Login', () => {
    let naukriData: base;

    const username = process.env.USERNAME as string;
    const password = process.env.PASSWORD as string;

    before(async() => {
        naukriData = new base();
        await naukriData.openNaukriLoginPage();
    });

    it('Login to Naukri', async () => {
        await naukriData.login(username, password);
    });

    after(async() => {
        console.log("Test Completed");
        await browser.deleteSession();
    });

});