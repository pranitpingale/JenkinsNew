const { Given, When, Then } = require('cucumber')


Given(/^user navigates to gmail login page$/, function () {
    browser.pause(5000)
    browser.moveToObject('//*[@id="login-portal"]/div/div[1]/h1',0,700);

    var loginOption = $('//*[@id="login-portal"]/div/div[1]/h1')
    loginOption.click() 
    
    browser.pause(3000)
    
When(/^2 user navigates to gmail login page$/, function () {
  })
    
  });