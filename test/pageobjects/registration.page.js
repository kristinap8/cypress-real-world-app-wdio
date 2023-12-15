import Page from './page.js';

const url = '/signup';
const firstNameInput = '#firstName';
const lastNameInput = '#lastName';
const usernameInput = '#username';
const passwordInput = '#password';
const confirmPasswordInput = '#confirmPassword';
const confirmPasswordFieldBorder = '#confirmPassword ~ fieldset';
const confirmPasswordErrorMsg = '#confirmPassword-helper-text';
const signUpBtn = "button[data-test='signup-submit']";

class RegistrationPage extends Page {

    async openPage() {
        await super.openUrl(url);
    }

    async getSignUpBtn() {
        return await super.getElement(signUpBtn);
    }

    async getConfirmPasswordInputBorderColor() {
        return await super.getCssPropertyValue(confirmPasswordFieldBorder, "border-color");
    }

    async getConfirmPasswordErrorMessage() {
        return await super.getElement(confirmPasswordErrorMsg);
    }

    async fillRegistrationForm(registrationData) {
        const {firstName, lastName, username, password, confirmPassword} = registrationData;
        await super.fillElement(firstNameInput, firstName);
        await super.fillElement(lastNameInput, lastName);
        await super.fillElement(usernameInput, username);
        await super.fillElement(passwordInput, password);
        await super.fillElement(confirmPasswordInput, confirmPassword); 
    }

    async clickSignUpBtn() {
        await super.clickElement(signUpBtn);
    }
}

export default new RegistrationPage();