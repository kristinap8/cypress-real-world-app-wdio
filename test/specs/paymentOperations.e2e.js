import loginPage from "../pageobjects/login.page.js";
import navBarPage from "../pageobjects/navBar.page.js";
import sideMenu from '../pageobjects/sideMenu.page.js';
import selectContactPage from "../pageobjects/selectContact.page.js";
import paymentPage from "../pageobjects/payment.page.js";
import notificationsPage from "../pageobjects/notifications.page.js";
import completePaymentPage from "../pageobjects/completePayment.page.js";
import { generateRandomNumber, generateTransactionData } from "../helper/generator.js";
import { findPasswordByUsername } from "../helper/helper.js";
import usersData from '../fixtures/users.json' assert {type: "json"};

const user = usersData[generateRandomNumber(0, usersData.length - 1)];
const transactionData = generateTransactionData();
const contactInd = generateRandomNumber(0, usersData.length - 2);
let contactFullName;
let contactUsername;
let balanceBefore;

describe("Payment transaction operations check", async () => {
    before(async () => {
        await loginPage.openPage();
        await loginPage.login(user.username, user.password);

        balanceBefore = await sideMenu.getBalance();

        await navBarPage.clickNewTransactionBtn();

        contactFullName = await selectContactPage.getContactFullName(contactInd);
        contactUsername = await selectContactPage.getContactUsername(contactInd);
        await selectContactPage.clickContactItem(contactInd);

        await paymentPage.fillPaymentForm(transactionData);
        await paymentPage.clickPayBtn();
    })

    it('Verify sending a payment', async () => {
        await expect(await completePaymentPage.getAlertMsg()).toHaveText('Transaction Submitted!');
        await expect(await completePaymentPage.getPaymentReceiverFullName()).toHaveText(contactFullName);
        await expect(await completePaymentPage.getSuccessMsg()).toHaveText("Paid $" + transactionData.amount + ".00 for " + transactionData.note);
    })

    it('Verify account balance update after sending a payment', async () => {
        const amountDiff = Number((balanceBefore - Number(transactionData.amount)).toFixed(2));
        await expect(await sideMenu.getBalance()).toEqual((amountDiff >= 0) ? amountDiff : 0);
    })

    it('Verify notification sent to the payment receiver', async () => {
        await sideMenu.clickLogoutMenuItem();
        await loginPage.login(contactUsername, findPasswordByUsername(usersData, contactUsername));

        await sideMenu.clickNotificationsMenuItem();
        await expect(await notificationsPage.getNotification(0)).toEqual(contactFullName + ' received payment.');
    })
})