@admin
Feature: admin page testing 

  Scenario: admin page
  	Given give to admin page
    When  login in "123456" and "123456" 
    Then  find the registered users by phone "6547324007"
    Then  Active the registered users