import loginPage from "../pageobjects/login.page.js";
import sideMenu from "../pageobjects/sideMenu.page.js";
import bankAccountsListPage from "../pageobjects/bankAccountsList.page.js";
import createBankAccountPage from "../pageobjects/createBankAccount.page.js";
import { generateRandomNumber, generateBankAccountData} from '../helper/generator.js';
import usersData from '../fixtures/users.json' assert {type: "json"};

const user = usersData[generateRandomNumber(0, usersData.length - 1)];
const bankAccountData = generateBankAccountData();

describe("Bank account operations check", async () => {

    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.login(user.username, user.password); 
        await sideMenu.clickBankAccountsMenuItem();
    })

    it("Create a bank account", async () => {
        await bankAccountsListPage.clickCreateBtn();
        await createBankAccountPage.createBankAccount(bankAccountData);
        await expect(browser).toHaveUrl(await bankAccountsListPage.getPageUrl());
        await expect(await bankAccountsListPage.getLastBankName()).toHaveText(bankAccountData.bankName);   
    })

    it("Delete a bank account", async () => {
        await bankAccountsListPage.clickLastDeleteBtn();
        await expect(await bankAccountsListPage.getLastBankName()).toHaveTextContaining('(Deleted)');
        await expect(await bankAccountsListPage.getLastDeleteBtn()).not.toBeExisting();
    })

    afterEach(async () => {
        await sideMenu.clickLogoutMenuItem();
    })
})