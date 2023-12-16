import Page from './page.js';
import { generateRandomNumber } from '../helper/generator.js';

const transactions = "*[data-test*='transaction-item']";
const transactionAmounts = "*[data-test*='transaction-amount']";
const amountFilterDropdown = "*[data-test='transaction-list-filter-amount-range-button']";
const amountFilterSlider = "*[data-test='transaction-list-filter-amount-range-slider']";
const amountFilterSliderMin = "*[data-test='transaction-list-filter-amount-range-slider'] *[data-index='0']";
const amountFilterSliderMax = "*[data-test='transaction-list-filter-amount-range-slider'] *[data-index='1']";
const amountRangeText = "*[data-test='transaction-list-filter-amount-range-text']";

class TransactionsPage extends Page {

    async getAmountRange() {
        return (await super.getElementText(amountRangeText)).replace(/[^\d$]/g, "").split('$').filter(Boolean).map(Number);
    }

    async getTransactionsCount() {
        return await super.getElementsCount(transactions);
    }

    async getTransactionAmounts() {
        const amounts = [];
        for (let index = 0; index < (await this.getTransactionsCount()); index++) {
            amounts.push(await super.getElementTextByIndex(transactionAmounts, index));
        }
        return amounts.map(str => parseFloat(str.replace(/[^0-9.]+/g, '')));
    }

    async clickLastTransaction() {
        await super.clickElementByIndex(transactions, 0);
    }

    async clickRandomTransaction() {
        const ind = generateRandomNumber(0, (await this.getTransactionsCount()) - 1);
        await super.clickElementByIndex(transactions, ind);
    }

    async openAmountFilterDropdown() {
        await super.clickElement(amountFilterDropdown);
    }

    async selectAmountRange() {
        const sliderWidth = await super.getElementWidth(amountFilterSlider);
        const numbs = [Number(generateRandomNumber(0, 1000 * sliderWidth / 1000)), Number(generateRandomNumber(0, 1000 * sliderWidth / 1000))].sort(function (a, b) {
            return a - b;
        });
        await super.dragSlider(amountFilterSliderMin, numbs[0]);
        await super.dragSlider(amountFilterSliderMax, -(sliderWidth - numbs[1]));
    }
}

export default new TransactionsPage();