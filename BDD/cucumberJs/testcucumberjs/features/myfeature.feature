@google
Feature: Example feature
  As a user of Cucumber.js
  I want to have documentation on Cucumber
  So that I can concentrate on building awesome applications

  Scenario: Reading documentation
    Given I open Google chrome
    Then I search for "ca technologies"
    Then verify the search result

  Scenario Outline: google serach with others
    Given I open Google chrome
    Then I search for "<keyword>"

    Examples:
        | keyword  | 
        | xioza01  | 



