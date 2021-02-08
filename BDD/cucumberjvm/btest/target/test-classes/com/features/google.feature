@web
Feature: Google Search

  Scenario: search google.com  
  to verify google search is working  
    Given I go to google  
    When I query for "cucumber spring selenium"  
    When click search  
    Then google page title should become "cucumber spring selenium - Google Search"
    
  Scenario: check search suggestion  
  to verify suggestion appeared as the user type the query  
    Given I go to google  
    When I query for "test"  
    When click search  
    Then google page title should become "test - Google Search"  