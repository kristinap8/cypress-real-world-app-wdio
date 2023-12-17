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
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless']
        },
        acceptInsecureCerts: true
    }],

    logLevel: 'error',

    bail: 0,

    baseUrl: env[process.env.ENV],

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',

    reporters: ['spec', ['allure',
        {
            outputDir: 'reports/allure-results/chrome',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            testFailureIgnore: true
        }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
