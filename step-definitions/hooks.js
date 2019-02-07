const { Before, After } = require('cucumber')


var json = require('json-file');
var file = json.read('./pageObjects/login.page.json');
var testData = json.read('./utilities/testData.json');

Before(function () {
    

    // //commonLib.loadPage('./')
    // loginLib.login();

});

After(function() {

    //logout from application
    // if (!dashboardPage.modalWindowCloseButton.isExisting()) {
    //     dashboardLib.logoutAmwater()
    // }

})

