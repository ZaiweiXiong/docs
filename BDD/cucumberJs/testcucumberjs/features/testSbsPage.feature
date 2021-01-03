@sbs
Feature: sbs frontend page test

Scenario: Automate the audio player
        Given sbs audio player url
        When the audio page is load "【文化苦丁茶】人生的林子里，你有大概率会遇到“鸟人”" and "APPLE PODCASTS" and "GOOGLE PODCASTS" completely 
        Then click play on the audio icon and verify audio player
        Then click and verify player controls
        Then click forward button and verify scrub on the progress bar
        Then click the language toolge and verify the language "SBS中文普通話主頁 SBS中文普通話主頁"