var webdriver = require('selenium-webdriver')
const { setWorldConstructor, setDefaultTimeout } = require("cucumber");
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');

//set up browser for testing
function CBTWorld(){

    // this.driver = new webdriver.Builder()
    // .forBrowser("chrome")
    // .build();
    //this.driver.get('https://bitbucket.org/jackxiong/sbsauto/')
    
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });
    this.driver= new Builder().withCapabilities(capabilities).build();

    
}
setDefaultTimeout(60 * 1000);
setWorldConstructor(CBTWorld);
