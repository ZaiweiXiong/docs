$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bunn.feature");
formatter.feature({
  "line": 2,
  "name": "bunning page",
  "description": "",
  "id": "bunning-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bunn"
    }
  ]
});
formatter.before({
  "duration": 4668457840,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "bunning page test",
  "description": "\nto verify serach in bunning page",
  "id": "bunning-page;bunning-page-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to bunning page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "type the \"paint\" for search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "The result is dispalyed",
  "keyword": "Then "
});
formatter.match({
  "location": "bunningSteps.i_go_to_bunning_page()"
});
formatter.result({
  "duration": 9099888967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paint",
      "offset": 10
    }
  ],
  "location": "bunningSteps.type_the_for_search(String)"
});
formatter.result({
  "duration": 615054886,
  "status": "passed"
});
formatter.match({
  "location": "bunningSteps.click_search()"
});
formatter.result({
  "duration": 4590210534,
  "status": "passed"
});
formatter.match({
  "location": "bunningSteps.the_result_is_dispalyed()"
});
formatter.result({
  "duration": 19983570571,
  "status": "passed"
});
formatter.after({
  "duration": 1484251982,
  "status": "passed"
});
formatter.uri("google.feature");
formatter.feature({
  "line": 2,
  "name": "Google Search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 3368636716,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "search google.com",
  "description": "to verify google search is working",
  "id": "google-search;search-google.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I go to google",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I query for \"cucumber spring selenium\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click search",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "google page title should become \"cucumber spring selenium - Google Search\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_go_to_google()"
});
formatter.result({
  "duration": 1156498436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber spring selenium",
      "offset": 13
    }
  ],
  "location": "GoogleSearch.i_query_for(String)"
});
formatter.result({
  "duration": 290877816,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.click_search()"
});
formatter.result({
  "duration": 2037074833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber spring selenium - Google Search",
      "offset": 33
    }
  ],
  "location": "GoogleSearch.google_page_title_should_become(String)"
});
formatter.result({
  "duration": 18126802,
  "status": "passed"
});
formatter.after({
  "duration": 255623065,
  "status": "passed"
});
formatter.before({
  "duration": 2956647299,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "check search suggestion",
  "description": "to verify suggestion appeared as the user type the query",
  "id": "google-search;check-search-suggestion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I go to google",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I query for \"test\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "click search",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "google page title should become \"test - Google Search\"",
  "keyword": "Then "
});
formatter.match({
  "location": "GoogleSearch.i_go_to_google()"
});
formatter.result({
  "duration": 693956104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    }
  ],
  "location": "GoogleSearch.i_query_for(String)"
});
formatter.result({
  "duration": 150490677,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.click_search()"
});
formatter.result({
  "duration": 2244345388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test - Google Search",
      "offset": 33
    }
  ],
  "location": "GoogleSearch.google_page_title_should_become(String)"
});
formatter.result({
  "duration": 16993007,
  "status": "passed"
});
formatter.after({
  "duration": 337265240,
  "status": "passed"
});
});