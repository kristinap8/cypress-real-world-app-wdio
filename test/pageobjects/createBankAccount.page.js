import Page from './page.js';

const bankNameInput = '#bankaccount-bankName-input';
const routingNumberInput = '#bankaccount-routingNumber-input';
const accountNumberInput = '#bankaccount-accountNumber-input';
const saveBtn = '*[data-test="bankaccount-submit"]';

class CreateBankAccountPage extends Page {
    async createBankAccount(bankAccountData) {
        const {bankName, routingNumber, accountNumber} = bankAccountData;
        await super.fillElement(bankNameInput, bankName);
        await super.fillElement(routingNumberInput, routingNumber);
        await super.fillElement(accountNumberInput, accountNumber);
        await super.clickElement(saveBtn);
    }
}

export default new CreateBankAccountPage();