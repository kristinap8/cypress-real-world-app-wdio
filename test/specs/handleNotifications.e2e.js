import loginPage from "../pageobjects/login.page.js";
import sideMenu from '../pageobjects/sideMenu.page.js';
import notificationsPage from "../pageobjects/notifications.page.js";
import navBarPage from "../pageobjects/navBar.page.js";
import { makePayment } from "../helper/helper.js";
import usersData from '../fixtures/users.json' assert {type: "json"};

const user = usersData[1];

describe("Notifications handling check", async () => {

    beforeEach(async () => {
        await makePayment(0, 1);
        await loginPage.login(user.username, user.password);
        await sideMenu.clickNotificationsMenuItem();
    })

    it("Dismiss a notification", async () => {
        const notificationsCountBefore = await notificationsPage.getNotificationsCount();
        await notificationsPage.pause(100);
        await notificationsPage.clickDismissRndNotification();
        await notificationsPage.pause(100);
        const notificationsCountAfter = await notificationsPage.getNotificationsCount();

        await expect(notificationsCountAfter).toEqual(notificationsCountBefore - 1);
        await expect(notificationsCountAfter).toEqual(await navBarPage.getNotificationCounterBadge());
    })

    it("Verify displayed message for no notifications", async () => {
        await notificationsPage.dismissAllNotifications();

        await expect(await notificationsPage.getNoNotificationsMsg()).toHaveText("No Notifications");
        await expect(await navBarPage.getNotificationCounterBadge()).not.toBeDisplayed();
    })

    afterEach(async () => {
        await sideMenu.clickLogoutMenuItem();
    })
})
