const assert = require('assert')
let location;
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
        password.setValue('qwerty');
        const logIn = $('button[ng-reflect-color="primary"]');
        logIn.click();
        browser.pause(2000)
    })
    it('Scroll to pizza that i want to order and choose pizza', () => {
        const pizza = $$('.ng-star-inserted');
        pizza[80].scrollIntoView();
        browser.pause(2000)
        const basket = $$('button[class="ng-star-inserted"]');
        basket[8].click();
        const order = $('a[href="/delivery/shipping"]');
        order.click();
    });
    it('I press "pickup" button', () => {
        const pickup = $('[routerlinkactive="active"]:nth-child(2)');
        pickup.click();
    });
    it('Press "Choose on map" button', () => {
        const chooseOnMap = $('form button:nth-child(2)');
        chooseOnMap.click();
    });
    // it('Choose Dominos shop and add this adress', () => {
    //     browser.pause(3000)
    //     const pizzaButton = $('div:nth-child(3) > div:nth-child(27) > img');
    //     pizzaButton.click();
    //     browser.pause(3000)
    //     const scrollToButton = $$('app-spin-button');
    //     scrollToButton[1].scrollIntoView();    
    //     const addButton = $$('app-spin-button');
    //     addButton[1].click();
    //     browser.pause(3000)
    // });
    it('Scroll to mark', () => {
        browser.pause(3000)
        const scrollToButton = $$('app-spin-button');
        scrollToButton[1].scrollIntoView();    
        browser.pause(3000)
    });
    it('Determin location of mark', () => {
        const mark = $('div:nth-child(3) > div:nth-child(21) > img')
        location = mark.getLocation();
        // console.log(location);
        // browser.pause(3000)
    });
    it('Click and move mark', () => {
        const markPeople = $('.gm-bundled-control-on-bottom > div')
        // markPeople.waitForExist(5000)
        const mark = $('div:nth-child(3) > div:nth-child(21) > img')
        markPeople.dragAndDrop(mark)
        // browser.pause(3000)
    })
    
})