const {By} = require('selenium-webdriver');


exports.sbspage = {

    sbs_url: function() {
        return 'https://www.sbs.com.au/language/mandarin/zh-hans/audio/cultural-conflict-meet-someone-causing-you-trouble';
    },
    sbs_title:function(){
        return By.xpath("//h1");
    },
    sbs_subscripbe(){
        return By.xpath("//div[2]/div[2]/div/div/span");
    },
    sbs_sub_apple:function(){
        return By.xpath("//a[contains(text(),'APPLE PODCASTS')]");
    },
    sbs_sub_google:function(){
        return By.xpath("//a[contains(text(),'GOOGLE PODCASTS')]");
    },
    sbs_audio_icon:function(){
        return By.xpath("//div[3]/button");
    },
    sbs_scoll:function (){
        return By.xpath("//div[3]/div/div/p");
    },
    sbs_audio_button:function(){
        return By.xpath("//div[3]/div[4]/div/button/span");
    },

    sbs_audio_forward:function(){
        return By.xpath("//button[4]/span");
    },
    sbs_audio_progress:function (){
        return By.xpath("//div/input");
    },
    sbs_audio_volume:function(){
        return By.xpath("//div[4]/div[2]/button/span");
    },
    sbs_language:function(){
        return By.xpath("//li/div/a/span");
    },
    sbs_sc_language:function(){
        return By.css("#mod-svg-icon_module-1 > svg");
    },
    sbs_tc_language:function(){
        return By.css("#mod-svg-icon_module-3 > svg");
    },
    tc_sbs:function (){
        return By.xpath("//li/a/span");
    }

}