import Page from './page.js';

const url = '/signin';
const usernameInput = '#username';
const passwordInput = '#password';
const signInBtn = "button[data-test='signin-submit']";
const errorMsg = "*[class='MuiAlert-message']";

class LoginPage extends Page {
    
    async openPage() {
        await super.openUrl(url);
    }

    async getErrorMsg() {
        return await super.getElement(errorMsg);
    }

    async login(username, password) {
        await super.fillElement(usernameInput, username);
        await super.fillElement(passwordInput, password);
        await super.clickElement(signInBtn);
    }
}

export default new LoginPage();