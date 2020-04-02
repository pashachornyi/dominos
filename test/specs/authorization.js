const assert = require('assert')

describe('Dominos main page', () => {
    it('should have the right title', () => {
        browser.url('/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Dominos')
    })
})