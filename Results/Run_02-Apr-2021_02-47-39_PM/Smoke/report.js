$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Cleartrip.feature");
formatter.feature({
  "line": 1,
  "name": "Cleartrip Application Login",
  "description": "",
  "id": "cleartrip-application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Book ticket in Cleartrip",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Cleartrip1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on cleartrip landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects the Roundtrip options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters destinations from \u003cFrom\u003e and To \u003cTo\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects both Depart and return",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User decides class and Airlines",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Search Flight button",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 14,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;1"
    },
    {
      "cells": [
        "kolkata",
        "chennai"
      ],
      "line": 15,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4149398000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Book ticket in Cleartrip",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Cleartrip1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on cleartrip landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects the Roundtrip options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters destinations from kolkata and To chennai",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User selects both Depart and return",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User decides class and Airlines",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Search Flight button",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.user_is_on_cleartrip_landing_page()"
});
formatter.result({
  "duration": 9240398800,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_the_roundtrip_options()"
});
formatter.result({
  "duration": 5828975300,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.stepDefinitions.CleartripStepDef.user_selects_the_roundtrip_options(CleartripStepDef.java:22)\r\n\tat ✽.When User selects the Roundtrip options(src/test/resources/features/Cleartrip.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "kolkata",
      "offset": 30
    },
    {
      "val": "chennai",
      "offset": 45
    }
  ],
  "location": "CleartripStepDef.user_enters_destinations_from_and_to(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_both_depart_and_return(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CleartripStepDef.user_enters_passenger_details(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CleartripStepDef.user_decides_class_and_airlines(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CleartripStepDef.user_click_on_search_flight_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 654745500,
  "status": "passed"
});
});