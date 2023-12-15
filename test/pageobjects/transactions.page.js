import Page from './page.js';

const transactions = "*[data-test*='transaction-item']";

class TransactionsPage extends Page {

    async clickLastTransaction() {
        await super.clickElementByIndex(transactions, 0);
    }
}

export default new TransactionsPage();