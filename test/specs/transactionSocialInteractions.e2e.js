import loginPage from '../pageobjects/login.page.js';
import sideMenu from '../pageobjects/sideMenu.page.js';
import transactionsPage from '../pageobjects/transactions.page.js';
import transactionDetailPage from '../pageobjects/transactionDetail.page.js';
import { generateRandomNumber, generateComment } from '../helper/generator.js';
import { makePayment } from '../helper/helper.js';
import usersData from '../fixtures/users.json' assert {type: "json"};

const user = usersData[generateRandomNumber(2, usersData.length - 1)];
const randomComment = generateComment();

describe("Transaction social interactions check", async () => {
    beforeEach(async () => {
        await makePayment(0, 1);
        await loginPage.login(user.username, user.password);
        await transactionsPage.pause(300);
    })

    it("Like a transaction", async () => {
        await transactionsPage.clickLastTransaction();
        const likesCountBefore = await transactionDetailPage.getLikesCount();
        await transactionDetailPage.clickThumbsUpBtn();
        await expect(await transactionDetailPage.getThumbsUpBtn()).toBeDisabled();
        await expect(await transactionDetailPage.getLikesCount()).toEqual(likesCountBefore + 1);
    })

    it("Comment on a transaction", async () => {
        await transactionsPage.clickRandomTransaction();

        await transactionDetailPage.writeComment(randomComment);
        await expect(await transactionDetailPage.getLastComment()).toHaveText(randomComment);
    })

    afterEach(async () => {
        await sideMenu.clickLogoutMenuItem();
    })
})
