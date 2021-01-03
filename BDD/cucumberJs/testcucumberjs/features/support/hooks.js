var {Before,After} = require('cucumber');
var {AfterAll, BeforeAll} = require('cucumber');

//set up browser after testing and before test
// BeforeAll (function() {
//   console.log("before all=>"+this.count);
// });
////'https://help.crossbrowsertesting.com/selenium-testing/frameworks/cucumber-js/';

Before({ tags: '@sbs' },function() {
  
  let url = 'https://cucumber.io/docs/installation/javascript/';
  console.log('before driver.....! '+url+" ")
  this.driver.get(url);

});

  After(function() {

    if(this.driver !=null){
      return this.driver.quit();
    }
    console.log('after driver....!')
  });


