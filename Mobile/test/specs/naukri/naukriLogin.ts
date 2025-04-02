import base from "../../pageobjects/naukri/base";


describe('', () => {
    let naukriPage: base;
    const username = process.env.USERNAME as string;
    const password = process.env.PASSWORD as string;

    before(async () => {
        naukriPage = new base();
        console.log('Open naukri page');
        await naukriPage.navigateToLoginPage();
    });

    it('Login to naukri', async () => {
        await naukriPage.login(username, password);
    });

    after(async () => {
        console.log('delete cookies and session');
        await browser.deleteCookies();
    });
});