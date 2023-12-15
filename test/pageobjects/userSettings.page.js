import Page from './page.js';

const firstNameInput = '#user-settings-firstName-input';
const firstNameFieldBorder = '#user-settings-firstName-input ~ fieldset';
const firstNameErrorMsg = '#user-settings-firstName-input-helper-text';
const lastNameInput = '#user-settings-lastName-input';
const lastNameFieldBorder = '#user-settings-lastName-input ~ fieldset';
const lastNameErrorMsg = '#user-settings-lastName-input-helper-text';
const emailInput = '#user-settings-email-input';
const emailFieldBorder ='#user-settings-email-input ~ fieldset';
const emailErrorMsg = '#user-settings-email-input-helper-text';
const phoneNumberInput = '#user-settings-phoneNumber-input';
const phoneNumberFieldBorder ='#user-settings-phoneNumber-input ~ fieldset';
const phoneNumberErrorMsg = '#user-settings-phoneNumber-input-helper-text';
const saveBtn = "button[data-test='user-settings-submit']";

class UserSettingsPage extends Page {

    async getFirstNameInput() {
        return await super.getElement(firstNameInput);
    }

    async getFirstNameInputBorderColor() {
        return await super.getCssPropertyValue(firstNameFieldBorder, "border-color");
    }

    async getFirstNameErrorMsg() {
        return await super.getElement(firstNameErrorMsg);
    }

    async getLastNameInput() {
        return await super.getElement(lastNameInput);
    }

    async getLastNameInputBorderColor() {
        return await super.getCssPropertyValue(lastNameFieldBorder, "border-color");
    }

    async getLastNameErrorMsg() {
        return await super.getElement(lastNameErrorMsg);
    }

    async getEmailInput() {
        return await super.getElement(emailInput);
    }

    async getEmailInputBorderColor() {
        return await super.getCssPropertyValue(emailFieldBorder, "border-color");
    }

    async getEmailErrorMsg() {
        return await super.getElement(emailErrorMsg);
    }

    async getPhoneNumberInput() {
        return await super.getElement(phoneNumberInput);
    }

    async getPhoneNumberInputBorderColor() {
        return await super.getCssPropertyValue(phoneNumberFieldBorder, "border-color");
    }

    async getPhoneNumberErrorMsg() {
        return await super.getElement(phoneNumberErrorMsg);
    }

    async getSaveBtn() {
        return await super.getElement(saveBtn);
    }

    async fillUserSettingsForm(userSettingsData) {
        const { firstName, lastName, email, phoneNumber } = userSettingsData;

        await super.fillElement(firstNameInput, firstName);
        await super.fillElement(lastNameInput, lastName);
        await super.fillElement(emailInput, email);
        await super.fillElement(phoneNumberInput, phoneNumber);
    }

    async clearUserSettingsForm() {
        await super.clearElementValue(firstNameInput);
        await super.clearElementValue(lastNameInput);
        await super.clearElementValue(emailInput);
        await super.clearElementValue(phoneNumberInput);
    }

    async clickSaveBtn() {
        await super.clickElement(saveBtn);
    }
}

export default new UserSettingsPage();