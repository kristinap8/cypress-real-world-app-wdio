class Page {

    async openUrl(url) {
        await browser.url(url || '/');
    }

    async getBaseUrl() {
        return browser.options.baseUrl;
    }

    async getElement(selector) {
        return await $(selector);
    }

    async getElementText(selector) {
        return await (await this.getElement(selector)).getText();
    }

    async getElements(selector) {
        return await $$(selector);
    }

    async getElementByIndex(selector, index) {
        return (await this.getElements(selector))[index];
    }

    async getElementTextByIndex(selector, index) {
        return await ((await this.getElements(selector))[index]).getText();
    }

    async getCssPropertyValue(selector, property) {
        return (await (await this.getElement(selector)).getCSSProperty(property)).value;
    }

    async getElementsCount(selector) {
        return await (await this.getElements(selector)).length;
    }

    async clickElement(selector) {
        await (await this.getElement(selector)).click();
    }

    async clickElementByIndex(selector, index) {
        await (await this.getElementByIndex(selector, index)).click();
    }

    async fillElement(selector, value) {
        await (await this.getElement(selector)).setValue(value);
    }

    async clearElementValue(selector) {
        await this.clickElement(selector);
        await browser.keys(['Command', 'a']);
        await this.pause(100);
        await browser.keys('Back space');
    }

    async pause(milliseconds) {
        await browser.pause(milliseconds);
    }

    async reloadPage() {
        await browser.refresh();
    }
}

export default Page;
