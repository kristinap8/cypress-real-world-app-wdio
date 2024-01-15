import Page from './page.js';

const contactItems = "*[data-test*='user-list-item']";

class SelectContactPage extends Page {

    async waitForContactItems() {
        await super.waitForDisplayed(contactItems);
    }

    async getContactFullName(index) {
        return (await super.getElementTextByIndex(contactItems, index)).split('\n')[0];
    }

    async getContactUsername(index) {
        return (await super.getElementTextByIndex(contactItems, index)).split('\n')[1].slice(3);
    }

    async clickContactItem(index) {
        await super.clickElementByIndex(contactItems, index);
    }
}

export default new SelectContactPage();