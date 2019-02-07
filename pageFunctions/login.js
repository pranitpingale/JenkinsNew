const { Before, After } = require('cucumber')

var json = require('json-file');
var file = json.read('./pageObjects/login.page.json');
var testData = json.read('./utilities/testData.json');

class Login {

    login(){
        
        loginPage.loginTextbox.waitForExist(10000)
        var loginID = 'ankita.sawant@accionlabs.com'
        var password = 'Jan@2019'
        console.log('################');
        console.log(loginID);
        
        loginPage.loginTextbox.setValue(loginID)
        console.log('Entered loginID');
        //var password = 'Jan@2019'
        loginPage.passwordTextbox.setValue(password)
        console.log('Entered password');
        loginPage.loginButton.click();
        console.log('Clicked on Login button');

        //Handle Paperless billing acknowledgement if appears
        // let paperLessUrl = browser.getUrl()

        // if (paperLessUrl.includes('paperlessBillingInterceptEnroll.do')) {
        //     loginPage.noThanksButton.waitForExist(10000)
        //     loginPage.noThanksButton.click()
        //     console.log('Clicked on No Thanks button')

        // }

       // dashboardLib.waitUntilDashboardLoads()

    }

}

module.exports = new Login();