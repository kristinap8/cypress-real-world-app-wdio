// import { generateRegistrationData } from "../helper/generator.js";
// import { isReddishColor } from "../helper/helper.js";
// import registrationPage from "../pageobjects/registration.page.js";
// import loginPage from "../pageobjects/login.page.js";

// const registrationDataSamePasswords = generateRegistrationData();
// const registrationDataDifferentPasswords = generateRegistrationData(false);


// describe('Registration functionality check', async () => {

//     beforeEach(async () => {
//         await registrationPage.openPage();
//     })

//     it.skip('Register with non-matching passwords', async () => {
//         await registrationPage.fillRegistrationForm(registrationDataDifferentPasswords);

//         await registrationPage.pause(100);
//         await expect(isReddishColor(await registrationPage.getConfirmPasswordInputBorderColor())).toBe(true);
//         await expect(await registrationPage.getConfirmPasswordErrorMessage()).toHaveText('Password does not match');

//         await expect(await registrationPage.getSignUpBtn()).toBeDisabled();
//     })

//     it.skip('Register with valid credentials', async () => {
//         await registrationPage.fillRegistrationForm(registrationDataSamePasswords);
//         await registrationPage.clickSignUpBtn();

//         await expect(browser).toHaveUrlContaining('signin');

//         await loginPage.login(registrationDataSamePasswords.username, registrationDataSamePasswords.password);
//         await expect(browser).toHaveUrl(await loginPage.getBaseUrl());
//     })

// })