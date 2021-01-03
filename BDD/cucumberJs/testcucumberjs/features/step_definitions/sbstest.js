const {Given, When, Then} = require('cucumber');
const { assert } = require('chai');
const sbs = require('../pages/sbsPage');


Given('sbs audio player url',  async  function () {
    console.log('url google serche'+sbs.sbspage.sbs_url());
    await this.driver.get(sbs.sbspage.sbs_url());
  });

  When('the audio page is load {string} and {string} and {string} completely',  async  function (sc_title,apple_pod,goole_pod) {
   
    const title= await this.driver.findElement(sbs.sbspage.sbs_title()).getText();
    assert.equal(title, sc_title);
    console.log('when audio page is load completely and verify the title =>'
                 +title);

    await this.driver.findElement(sbs.sbspage.sbs_subscripbe()).click();
    const sub_apple = await this.driver.findElement(sbs.sbspage.sbs_sub_apple()).getText();
    const sub_google = await this.driver.findElement(sbs.sbspage.sbs_sub_google()).getText();
    assert.equal(sub_apple, apple_pod);
    assert.equal(sub_google, goole_pod);
    console.log('when the audio page is load completely and verify Subscribedropdown =>'
                +sub_apple+" "+sub_google);

  });
  
  Then('click play on the audio icon and verify audio player',  async function () {
    
    console.log('click play on the audio icon and verify audio player');

    
    const audio_enable = this.driver.findElement(sbs.sbspage.sbs_audio_icon()).isEnabled();
    assert.isOk(audio_enable,'audio button ok')
    const audio = await this.driver.findElement(sbs.sbspage.sbs_audio_icon());
    assert.isOk(audio,'audio button ok')
    audio.click();

    const scroll = await this.driver.findElement(sbs.sbspage.sbs_scoll());
    scroll.click();
    
  });

  Then('click and verify player controls',  async function () {

    await this.driver.manage().setTimeouts( { implicit: 20000 } );
    const audio_bottom_button=await this.driver.findElement(sbs.sbspage.sbs_audio_button());
    assert.isOk(audio_bottom_button,'audio_bottom_button_pause is worked')
    audio_bottom_button.click();

    const audio_volume = await this.driver.findElement(sbs.sbspage.sbs_audio_volume());
    assert.isOk(audio_volume,'audio_volume_mute button is worked')
    audio_volume.click();

  });

  Then('click forward button and verify scrub on the progress bar',  async function () {
    console.log('click forward button and verify scrub on the progress bar');
    
    const forward = await  this.driver.findElement(sbs.sbspage.sbs_audio_forward());
    assert.isOk(forward,'forward button is worked')
    forward.click();

    const progress  =  await  this.driver.findElement(sbs.sbspage.sbs_audio_progress());
    assert.isOk(progress,'progress button is worked');
    progress.click();
  });

  Then('click the language toolge and verify the language {string}',  async function (string) {

    console.log('click the language toolge and verify the language');
    const language_toolge = await this.driver.findElement(sbs.sbspage.sbs_language());
    language_toolge.click();
    assert.isOk(language_toolge,'language_toolge button is ok');

    //verify the change language
    const tc = await this.driver.findElement(sbs.sbspage.sbs_tc_language());
    await tc.click();
    const title_tc = await this.driver.findElement(sbs.sbspage.tc_sbs()).getText();
    assert.equal(title_tc, string);
    
  });