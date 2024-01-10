import loginPage from '../pageobjects/login.page.js';
import navBarPage from '../pageobjects/navBar.page.js';
import sideMenu from '../pageobjects/sideMenu.page.js';
import selectContactPage from '../pageobjects/selectContact.page.js';
import paymentPage from '../pageobjects/payment.page.js';
import completePaymentPage from '../pageobjects/completePayment.page.js';
import transactionsPage from '../pageobjects/transactions.page.js';
import transactionDetailPage from '../pageobjects/transactionDetail.page.js';
import usersData from '../fixtures/users.json' assert {type: "json"};
import { generateRandomNumber, generateTransactionData } from '../helper/generator.js';
import { findPasswordByUsername } from "../helper/helper.js";

const user = usersData[generateRandomNumber(0, usersData.length - 1)];
const transactionData = generateTransactionData();
const contactInd = generateRandomNumber(0, usersData.length - 2);
let senderBalanceBefore;
let receiverBalanceBefore;
let contactFullName;
let contactUsername;

describe('Request transaction operations check', async () => {
    beforeEach(async () => {
        await loginPage.openPage();
        await loginPage.login(user.username, user.password);

        senderBalanceBefore = await sideMenu.getBalance();
        await navBarPage.clickNewTransactionBtn();

        contactFullName = await selectContactPage.getContactFullName(contactInd);
        contactUsername = await selectContactPage.getContactUsername(contactInd);
        await selectContactPage.clickContactItem(contactInd);

        await paymentPage.fillPaymentForm(transactionData);
        await paymentPage.clickRequestBtn();
    })

    it("Verify requesting the payment", async () => {
        await expect(await completePaymentPage.getAlertMsg()).toHaveText('Transaction Submitted!');
        await expect(await completePaymentPage.getPaymentReceiverFullName()).toHaveText(contactFullName);
        await expect(await completePaymentPage.getSuccessMsg()).toHaveText("Requested $" + transactionData.amount + ".00 for " + transactionData.note);
    })

    it("Verify balance change after accepting request", async () => {
        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(contactUsername, findPasswordByUsername(usersData, contactUsername));
        receiverBalanceBefore = await sideMenu.getBalance();

        await navBarPage.goToMineTab();
        await loginPage.pause(100);
        await transactionsPage.clickLastTransaction();

        await transactionDetailPage.clickAcceptBtn();

        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(user.username, user.password);
        const senderAmountDiff = Number((senderBalanceBefore + Number(transactionData.amount)).toFixed(2));
        await expect(await sideMenu.getBalance()).toEqual(senderAmountDiff >= 0 ? senderAmountDiff: 0);

        await sideMenu.clickLogoutMenuItem()
        const receiverAmountDiff = Number((receiverBalanceBefore - Number(transactionData.amount)).toFixed(2));
        await loginPage.login(contactUsername, findPasswordByUsername(usersData, contactUsername));
        await expect(await sideMenu.getBalance()).toEqual(receiverAmountDiff >= 0 ? receiverAmountDiff : 0);
    })

    it("Verify balance after rejecting request", async () => {
        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(contactUsername, findPasswordByUsername(usersData, contactUsername));
        receiverBalanceBefore = await sideMenu.getBalance();

        await navBarPage.goToMineTab();
        await loginPage.pause(100);
        await transactionsPage.clickLastTransaction();

        await transactionDetailPage.clickRejectBtn();

        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(user.username, user.password);
        await expect(await sideMenu.getBalance()).toEqual(senderBalanceBefore > 0 ? senderBalanceBefore : 0);

        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(contactUsername, findPasswordByUsername(usersData, contactUsername));
        await expect(await sideMenu.getBalance()).toEqual(receiverBalanceBefore > 0 ? receiverBalanceBefore : 0);
    })

    afterEach(async () => {
        await sideMenu.clickLogoutMenuItem();
    })
})
