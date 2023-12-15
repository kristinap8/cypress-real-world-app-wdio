import Page from './page.js';

const url = 'bankaccounts';
const createBtn = '*[data-test="bankaccount-new"]';
const deleteBtns = 'button[data-test="bankaccount-delete"]';
const bankNames = '*[data-test*="bankaccount-list-item"] p';

class BankAccountsListPage extends Page {

    async getPageUrl() {
        return await super.getBaseUrl() + url;
    }

    async getBankNamesCount() {
        return super.getElementsCount(bankNames);
    }

    async getDeleteBtnsCount() {
        return super.getElementsCount(deleteBtns);
    }

    async getLastBankName() {
        return super.getElementByIndex(bankNames, (await this.getBankNamesCount()) - 1);
    }

    async getLastDeleteBtn() {
        return await super.getElementByIndex(deleteBtns, (await this.getBankNamesCount()) - 1);
    }

    async clickCreateBtn() {
        await super.clickElement(createBtn);
    }

    async clickLastDeleteBtn() {
        await super.clickElementByIndex(deleteBtns, (await this.getDeleteBtnsCount()) - 1);
    }
}

export default new BankAccountsListPage();