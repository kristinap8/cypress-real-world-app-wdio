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
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--headless']},
        acceptInsecureCerts: true
    }],

    logLevel: 'error',

    bail: 0,

    baseUrl: env[process.env.ENV],

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: ['geckodriver'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}