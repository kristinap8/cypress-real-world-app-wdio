import loginPage from '../pageobjects/login.page.js';
import sideMenu from '../pageobjects/sideMenu.page.js';
import { generateRandomNumber, generateRandomUsername } from '../helper/generator.js';
import usersData from '../fixtures/users.json' assert {type: "json"};

const user = usersData[generateRandomNumber(0, usersData.length - 1)];
const randomUsername = generateRandomUsername();

describe('Login functionality check', async () => {

    beforeEach(async () => {
        await loginPage.openPage();
    })

    it('Login with valid credentials', async () => {
        await loginPage.login(user.username, user.password);

        await expect(browser).toHaveUrl(await loginPage.getBaseUrl());
        await sideMenu.clickLogoutMenuItem();
    })

    it('Login with non-existing username', async () => {
        await loginPage.login(randomUsername, user.password);

        await expect(await loginPage.getErrorMsg()).toHaveText('Username or password is invalid');
    })
})