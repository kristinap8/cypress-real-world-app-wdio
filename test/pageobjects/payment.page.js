import Page from './page.js';

const amountInput = '#amount';
const noteInput = '#transaction-create-description-input';
const payBtn = '*[data-test="transaction-create-submit-payment"]';
const requestBtn = '*[data-test="transaction-create-submit-request"]';

class PaymentPage extends Page {

    async fillPaymentForm(transactionData) {
        const { amount, note } = transactionData;

        await super.fillElement(amountInput, amount);
        await super.fillElement(noteInput, note);
    }

    async clickPayBtn() {
        await super.clickElement(payBtn);
    }

    async clickRequestBtn() {
        await super.clickElement(requestBtn);
    }

}

export default new PaymentPage();