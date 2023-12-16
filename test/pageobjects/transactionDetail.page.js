import Page from './page.js';

const acceptBtn = "*[data-test*='transaction-accept-request']";
const rejectBtn = "*[data-test*='transaction-reject-request']";
const thumbsUpBtn = "*[data-test*='transaction-like-button']";
const likesCount = "*[data-test*='transaction-like-count']";
const commentInput = "*[data-test*='transaction-comment-input']";
const lastComment = "*[data-test*='comment-list-item']:last-child";

class TransactionDetailPage extends Page {

    async getThumbsUpBtn() {
        return await super.getElement(thumbsUpBtn);
    }

    async getLikesCount() {
        return Number(await super.getElementText(likesCount));
    }

    async getLastComment() {
        return await super.getElement(lastComment);
    }

    async clickAcceptBtn() {
        await super.clickElement(acceptBtn);
    }

    async clickRejectBtn() {
        await super.clickElement(rejectBtn);
    }

    async clickThumbsUpBtn() {
        await super.clickElement(thumbsUpBtn);
    }

    async writeComment(comment) {
        await super.fillElement(commentInput, comment);
        await super.clickElementByKey(commentInput, 'Enter');
    }
}

export default new TransactionDetailPage();