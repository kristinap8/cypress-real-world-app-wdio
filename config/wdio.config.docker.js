import env from '../environments/env.js';

export const config = {
    runner: 'local',

    specs: [
        '../test/specs/**/*.js'
    ],

    exclude: [

    ],

    maxInstances: 1,

    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [ '--headless', '--no-sandbox', '--disable-dev-shm-usage']
        },
        acceptInsecureCerts: true
    }],

    logLevel: 'error',

    bail: 0,

    baseUrl: env[process.env.ENV],

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [],

    framework: 'mocha',

    reporters:  [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
