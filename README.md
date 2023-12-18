# Cypress-Real-World-App -- testing using WebDriverIO

## Table of Contents

1. [Summary of Repo](#summary-of-repo)
2. [Requirements](#requirements)
3. [Steps to Install](#steps-to-install)
4. [Steps to Launch](#steps-to-launch)
5. [Create a Report](#create-a-report)

## Summary of Repo

This repository contains automated tests for Cypress Real World App implemented using WebDriverIO. The website can be found [here](https://github.com/cypress-io/cypress-realworld-app).<br>

The deployed GitHub Pages allure reports can be found with the following links: 
1. Allure report for tests run in [Chrome browser](https://kristinap8.github.io/cypress-real-world-app-wdio/chrome).
2. Allure report for tests run in [Firefox browser](https://kristinap8.github.io/cypress-real-world-app-wdio/firefox).
3. Allure report for tests run in [Microsoft Edge browser](https://kristinap8.github.io/cypress-real-world-app-wdio/edge).


## Requirements

- **Node.js:** Make sure you have Node.js installed.
- **Java 8 or higher:** Required for working with Allure.
- **Other dependencies:** Check the `package.json` file for additional dependencies.

## Steps to Install

1. Clone This Repository:

```bash
git clone https://github.com/kristinap8/cypress-real-world-app-wdio.git
```

2. Navigate to the Project Directory:

```bash
cd cypress-real-world-app-wdio
```

3. Install Project Dependencies:

```bash
npm install
```

## Steps to Launch:

1. Run All Tests in Chrome:

```bash
npm run wdio:run:chrome
```

2. Run Single Test in Chrome:

```bash
npm run wdio:spec:chrome <path-to-the-spec>
```

3. Run All Tests in Firefox:

```bash
npm run wdio:run:firefox
```

4. Run Single Test in Firefox:

```bash
npm run wdio:spec:firefox <path-to-the-spec>
```

5. Run All Tests in Microsoft Edge:

```bash
npm run wdio:run:edge
```

6. Run Single Test in Microsoft Edge:

```bash
npm run wdio:spec:edge <path-to-the-spec>
```

## Create a report

1. Create an Allure Report for Tests Run in Chrome Browser:

```bash
npm run report:generate:chrome
```

2. Create an Allure Report for Tests Run in Firefox Browser:

```bash
npm run report:generate:firefox
```

3. Create an Allure Report for Tests Run in Microsoft Edge browser:

```bash
npm run report:generate:edge
```

4. Open Allure Report for Different Browsers:

```bash
npm run report:open:<name-of-a-browser>
```

5. Run All Tests for Different Browsers, Generate and Open Allure Report:

```bash
npm run wdio:e2e:run:<name-of-a-browser>
```