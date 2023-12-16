import loginPage from '../pageobjects/login.page.js';
import transactionsPage from '../pageobjects/transactions.page.js';
import usersData from '../fixtures/users.json' assert {type: "json"};
import { generateRandomNumber } from '../helper/generator.js';

const user = usersData[generateRandomNumber(0, usersData.length - 1)];

describe("Transactions filtering check", async () => {
    it("Filter by amount range", async () => {
        await loginPage.openPage();
        await loginPage.login(user.username, user.password);

        await transactionsPage.openAmountFilterDropdown();
        await transactionsPage.selectAmountRange();

        await transactionsPage.pause(200);

        const amountBorders = await transactionsPage.getAmountRange();
        const amounts = await transactionsPage.getTransactionAmounts();

        amounts.forEach((amount) => {
            expect(amount).toBeLessThanOrEqual(amountBorders[1]);
            expect(amount).toBeGreaterThanOrEqual(amountBorders[0]);
        });
    })
})