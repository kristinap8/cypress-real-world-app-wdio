import Page from './page.js';
import { generateRandomNumber } from '../helper/generator.js';

const notificationsList = "*[data-test='notifications-list']";
const notificationItems = "*[data-test*='notification-list-item']";
const dismissBtns = "button[data-test*='notification-mark-read']";
const noNotificationsMsg = "*[data-test='empty-list-header']";

class NotificationsPage extends Page {

    async getNotification(index) {
        return (await super.getElementTextByIndex(notificationItems, index)).split('\n')[0];
    }

    async getNotificationsCount() {
        return await super.getElementsCount(notificationItems);
    }

    async getNoNotificationsMsg() {
        return await super.getElement(noNotificationsMsg);
    }

    async waitForNotificationList() {
        await super.waitForDisplayed(notificationsList);
    }

    async clickDismissRndNotification() {
        const rndInd = generateRandomNumber(0, await this.getNotificationsCount() - 1);
        await super.clickElementByIndex(dismissBtns, rndInd);
    }

    async dismissAllNotifications() {
        const notificationsCount = await this.getNotificationsCount();
        for (let i = 0; i < notificationsCount; i++) {
            await super.clickElementByIndex(dismissBtns, 0);
        }
    }
}

export default new NotificationsPage();