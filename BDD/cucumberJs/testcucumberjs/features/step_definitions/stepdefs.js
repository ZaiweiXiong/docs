var {Given,Then } = require('cucumber');
const { Key,By } = require('selenium-webdriver');
const search = require('../pages/googlePage');
const { expect,assert } = require('chai');


Given('I open Google chrome', async function () {
    await this.driver.get(search.google.url());
});

Then('I search for {string}', async function (string) {
  const element = await this.driver.findElement(search.google.type_key());
  element.sendKeys(string, Key.RETURN);
  element.submit();
});

Then('verify the search result',async function () {
  
  const title = await this.driver.findElement(search.google.title_google()).getText();
  console.log("=>"+title);
  var temp = 'CA Technologies Infrastructure Software - Broadcom';
  assert.equal(title,temp,'== title string in google===')

  
});