import loginPage from "../pageobjects/login.page.js";
import navBarPage from "../pageobjects/navBar.page.js";
import selectContactPage from "../pageobjects/selectContact.page.js";
import paymentPage from "../pageobjects/payment.page.js";
import sideMenu from '../pageobjects/sideMenu.page.js';
import { generateTransactionData } from "./generator.js";
import usersData from '../fixtures/users.json' assert {type: "json"};
import transactionsPage from "../pageobjects/transactions.page.js";

export function isReddishColor(rgba) {
    const rgbaColor = rgba.match(/\d+/g).map(Number);
    return rgbaColor[0] > 100 && rgbaColor[0] > rgbaColor[1] * 2 && rgbaColor[0] > rgbaColor[2] * 2;
}

export async function makePayment(payerInd, receiverInd) {
    await loginPage.openPage();
    await loginPage.login(usersData[payerInd].username, usersData[payerInd].password);
    
    await transactionsPage.waitForTransactionsList();
    await navBarPage.clickNewTransactionBtn();
    await selectContactPage.clickContactItem(receiverInd - 1);

    await paymentPage.fillPaymentForm(generateTransactionData());
    await paymentPage.clickPayBtn();

    await sideMenu.clickLogoutMenuItem();
}

export function findPasswordByUsername(users, username) {
    return users[users.findIndex(function (item, i) {
        return item.username === username
    })
    ].password;
}
