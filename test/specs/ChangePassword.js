const assert = require('assert')

describe('Dominos main page', () => {
    it('should have the right title', () => {
        browser.url('/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Dominos')
    })
    it('I press authorization button', () => {
        const authorizationButton = $('.fake-header > button');
        authorizationButton.click();
        browser.pause(1000)
    })
    it('I write login and password in the form', () => {
        const login = $('input[ng-reflect-name="username"]');
        login.setValue('Pasha');
        const password = $('input[ng-reflect-name="password"]');
        password.setValue('qwerty1');
        const logIn = $('button[color="primary"]');
        logIn.click();
        browser.pause(2000)
    })
    it('I press user settings button', () => {
        const userButton = $('.fake-header > button');
        userButton.click();
        browser.pause(1000)
        const settingsButton = $('button[routerlink="auth/user-settings"]');
        settingsButton.click();
    })
    it('I write login and password in the form', () => {
        const currentPassword = $('input[ng-reflect-name="currentPassword"]');
        currentPassword.setValue('qwerty1');
        const newPassword = $('input[ng-reflect-name="newPassword"]');
        newPassword.setValue('qwerty');
        const confirmPassword = $('input[ng-reflect-name="confirmPassword"]');
        confirmPassword.setValue('qwerty');
    })
    it('I confirm changes', () => {
        const confirmButton = $('div > div > div > button');
        confirmButton.click();
    })
    it('I press user settings button again and logout', () => {
        const userButton = $('.fake-header > button');
        userButton.click();
        browser.pause(1000)
        const settingsButton = $('#cdk-overlay-0 > div > div > button:nth-child(2)');
        settingsButton.click();
        browser.pause(6000)
    })
    it('I press logo button', () => {
        const logoButton = $('.logo');
        logoButton.click();
        browser.pause(6000)
    })
    it('I press authorization button', () => {
        const authorizationButton = $('.fake-header > button');
        authorizationButton.click();
    })
    it('I write login and password in the form with a new password', () => {
        const login = $('input[ng-reflect-name="username"]');
        login.setValue('Pasha');
        const password = $('input[ng-reflect-name="password"]');
        password.setValue('qwerty');
        const logIn = $('button[color="primary"]');
        myButton.click();
        logIn.pause(2000)
    })
})