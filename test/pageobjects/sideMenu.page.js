import Page from './page.js';

const logoutMenuItem = '*[data-test="sidenav-signout"]';
const bankAccountsMenuItem = '*[data-test="sidenav-bankaccounts"]';
const myAccountMenuItem = '*[data-test="sidenav-user-settings"]';
const userFullNameMenuItem = '*[data-test="sidenav-user-full-name"]';
const balanceMenuItem = '*[data-test="sidenav-user-balance"]';
const notificationsMenuItem = '*[data-test="sidenav-notifications"]';

class SideMenu extends Page {

    async getUserFullNameMenuItem() {
        return await super.getElement(userFullNameMenuItem);
    }

    async getBalance() {
        return Number((await super.getElementText(balanceMenuItem)).replace(/[\$,]/g, ''));
    }

    async clickLogoutMenuItem() {
        await super.clickElement(logoutMenuItem);
    }

    async clickBankAccountsMenuItem() {
        await super.clickElement(bankAccountsMenuItem);
    }

    async clickMyAccountMenuItem() {
        await super.clickElement(myAccountMenuItem);
    }

    async clickNotificationsMenuItem() {
        await super.clickElement(notificationsMenuItem);
    }
}

export default new SideMenu();