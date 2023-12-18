import loginPage from "../pageobjects/login.page.js";
import sideMenu from "../pageobjects/sideMenu.page.js";
import userSettingsPage from "../pageobjects/userSettings.page.js";
import usersData from '../fixtures/users.json' assert {type: "json"};
import { generateUserSettingsData, generateRandomNumber } from "../helper/generator.js";
import { isReddishColor } from "../helper/helper.js";

const user = usersData[generateRandomNumber(0, usersData.length - 1)];
const userSettingsData = generateUserSettingsData();

describe("Account settings update check", async () => {

    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.login(user.username, user.password);
        await sideMenu.clickMyAccountMenuItem();
    })

    it("Update user settings", async () => {
        await userSettingsPage.clearUserSettingsForm();
        await userSettingsPage.pause(1000);
        await userSettingsPage.fillUserSettingsForm(userSettingsData);
        await userSettingsPage.pause(1000);
        await userSettingsPage.clickSaveBtn();
        await userSettingsPage.pause(1000);
        await userSettingsPage.reloadPage();
        await userSettingsPage.pause(1000);

        await expect(await userSettingsPage.getFirstNameInput()).toHaveValue(userSettingsData.firstName);
        await expect(await userSettingsPage.getLastNameInput()).toHaveValue(userSettingsData.lastName);
        await expect(await userSettingsPage.getEmailInput()).toHaveValue(userSettingsData.email);
        await expect(await userSettingsPage.getPhoneNumberInput()).toHaveValue(userSettingsData.phoneNumber);

        await expect(await sideMenu.getUserFullNameMenuItem()).toHaveText(userSettingsData.firstName + " " + userSettingsData.lastName[0]);
    })

    it("Update user settings with blank values", async () => {
        await userSettingsPage.clearUserSettingsForm();
        await userSettingsPage.pause(1000);

        await expect(isReddishColor(await userSettingsPage.getFirstNameInputBorderColor())).toBe(true);
        await expect(await userSettingsPage.getFirstNameErrorMsg()).toHaveText('Enter a first name');

        await expect(isReddishColor(await userSettingsPage.getLastNameInputBorderColor())).toBe(true);
        await expect(await userSettingsPage.getLastNameErrorMsg()).toHaveText('Enter a last name');

        await expect(isReddishColor(await userSettingsPage.getEmailInputBorderColor())).toBe(true);
        await expect(await userSettingsPage.getEmailErrorMsg()).toHaveText('Enter an email address');

        await expect(isReddishColor(await userSettingsPage.getPhoneNumberInputBorderColor())).toBe(true);
        await expect(await userSettingsPage.getPhoneNumberErrorMsg()).toHaveText('Enter a phone number');

        await expect(await userSettingsPage.getSaveBtn()).toBeDisabled();

    })

    afterEach(async () => {
        await sideMenu.clickLogoutMenuItem();
    })
})
