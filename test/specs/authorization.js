const assert = require('assert')

describe('Dominos main page', () => {
    it('should have the right title', () => {
        browser.url('/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Dominos')
    })
    it('I press authorization button', () => {
        const myButton = $('.fake-header > button');
        myButton.click();
        browser.pause(1000)
    })
    it('I write login and password in the form', () => {
        const login = $('input[ng-reflect-name="username"]');
        login.setValue('Pasha');
        const password = $('input[ng-reflect-name="password"]');
        password.setValue('qwerty');
        const myButton = $('button[color="primary"]');
        myButton.click();
        browser.pause(2000)
    })
    it('I demonstrate the same name in my profile and on authorization form', () => {
        const elem = $('span > span');
        const name = elem.getText();
        assert.equal(name,'Pasha')
    })

    
})