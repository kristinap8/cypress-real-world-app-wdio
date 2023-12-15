import Page from './page.js';

const acceptBtn = "*[data-test*='transaction-accept-request']";
const rejectBtn = "*[data-test*='transaction-reject-request']";

class TransactionDetailPage extends Page {

    async clickAcceptBtn() {
        await super.clickElement(acceptBtn);
    }

    async clickRejectBtn() {
        await super.clickElement(rejectBtn);
    }
}

export default new TransactionDetailPage();