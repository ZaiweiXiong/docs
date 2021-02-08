@bunn
Feature: bunning page

 Scenario: bunning page test
 
  to verify serach in bunning page 
    Given I go to bunning page
    When  type the "paint" for search
    And   Click search  
    Then  The result is dispalyed
