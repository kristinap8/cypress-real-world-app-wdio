import Page from './page.js';

const alertMsg = '[role="alert"]';
const completeFormHeadings = '*[data-test="main"] h2';

class CompletePaymentPage extends Page {

    async getAlertMsg() {
        return await super.getElement(alertMsg);
    }

    async getPaymentReceiverFullName() {
        return await super.getElementByIndex(completeFormHeadings, 0);
    }

    async getSuccessMsg() {
        return await super.getElementByIndex(completeFormHeadings, 1);
    }
}

export default new CompletePaymentPage();