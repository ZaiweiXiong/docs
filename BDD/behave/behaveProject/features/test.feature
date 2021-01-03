Feature: showing off behave

  Scenario: run a simple test
     Given we have behave installed
      When we implement a test
      Then behave will test it for us!
    
   Scenario Outline: run a simple test with Multiple inputs
     Given we have behave installed
      When Enter username "<username>" and password "<password>"
      Then user should login successfully
    Examples:
    |username|password|
    |xioza01 |ca technologies|
    |Iris    |ca technologies|
    |Jessie  |ca technologies|