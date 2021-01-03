
const {By} = require('selenium-webdriver');
exports.google = {

    url: function() {
        return 'https://www.google.com';
    },
    type_key:function(){
        return By.name('q');
    },
    title_google:function(){
        return By.xpath("//span[contains(text(),'CA Technologies')]");
    },
}