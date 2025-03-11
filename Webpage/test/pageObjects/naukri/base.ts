export default class base {
    constructor(){

    }

    private getUsernameField(){
        return browser.$("//input[contains(@placeholder,'Username')]");
    }

    private getPasswordField(){
        return browser.$("//input[@type='password']");
    }

    private getLoginOption(){
        return browser.$("//a[@id='login_Layer']")
    }

    private getLoginButton(){
        return browser.$("button[class*='loginButton']");
    }

    async openNaukriLoginPage(){
        await browser.url("https://www.naukri.com/");
        console.log("Navigated to Naukri");
        await this.getLoginOption().click();
        console.log("Clicked on Login Option");
    }

    async login(username: string, password: string){
        await this.getUsernameField().setValue(username);
        await this.getPasswordField().setValue(password);
        await this.getLoginButton().click();
    };
};