import Page from './page.js';

const newTransactionBtn = '*[data-test="nav-top-new-transaction"]';
const mineTab = '*[data-test="nav-personal-tab"]';
const notificationCounterBadge = "*[data-test='nav-top-notifications-count']";

class NavBar extends Page {
    async getNotificationCounterBadge() {
        return Number(await super.getElementText(notificationCounterBadge));
    }

    async clickNewTransactionBtn() {
        await super.clickElement(newTransactionBtn);
    }

    async goToMineTab() {
        await super.clickElement(mineTab);
    }
}

export default new NavBar();