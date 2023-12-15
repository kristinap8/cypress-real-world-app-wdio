import { faker } from '@faker-js/faker';

export function generateRegistrationData(samePasswords = true) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const username = faker.internet.userName({ firstName: firstName, lastName: lastName });
    const password = faker.internet.password();
    const confirmPassword = samePasswords ? password : faker.internet.password();

    return {
        firstName,
        lastName,
        username,
        password,
        confirmPassword
    };
}

export function generateRandomUsername() {
    return faker.internet.userName();
}

export function generateRandomNumber(min, max) {
    return faker.number.int({ min: min, max: max });
}

export function generateBankAccountData() {
    const bankName = faker.finance.accountName({ length: { min: 5 } });
    const routingNumber = faker.finance.routingNumber({ length: 9 });
    const accountNumber = faker.finance.accountNumber({ length: { min: 9, max: 12 } });

    return {
        bankName,
        routingNumber,
        accountNumber
    };
}

export function generateUserSettingsData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const phoneNumber = faker.string.numeric({ length: { min: 6, max: 12 } });

    return {
        firstName,
        lastName,
        email,
        phoneNumber
    };
}

export function generateTransactionData() {
    const amount = faker.commerce.price({ dec: 0 });
    const note = faker.commerce.productName();

    return {
        amount,
        note
    };
}