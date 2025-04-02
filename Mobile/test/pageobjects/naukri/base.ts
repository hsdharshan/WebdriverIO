export default class base {
    constructor() {
    }

    private get loginOption(): ChainablePromiseElement {
        return browser.$('#login_Layer')
    }

    private get userName(): ChainablePromiseElement {
        return browser.$("input[placeholder*='Username']")
    }

    private get password(): ChainablePromiseElement {
        return browser.$("//input[@type='password']")
    }

    private get userLogin(): ChainablePromiseElement {
        return browser.$("//button[@type='submit']")
    }

    async navigateToLoginPage() {
        await browser.url('https://www.naukri.com/')
        await this.loginOption.click()
    }

    async login(username: string, password: string) {
        await this.userName.setValue(username)
        await this.password.setValue(password)
        await this.userLogin.click();
    }
}