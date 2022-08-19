exports.config = {
    specs: ['./test/specs/login/hahalolo.e2e.ts'],
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            browserName: 'chrome',
            maxInstances: 5,
            'goog:chromeOptions': {
                args: [],
            },
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'info',
    bail: 0,
    // baseUrl: 'https://sb.halome.dev/welcome',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000,
    },
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json',
        },
        tsConfigPathsOpts: {
            baseUrl: './',
        },
    },
};
