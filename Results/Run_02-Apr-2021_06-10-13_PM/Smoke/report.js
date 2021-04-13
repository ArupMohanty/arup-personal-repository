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
  "name": "User selects the \"Roundtrip\" options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters destinations from \u003cFrom\u003e and To \u003cTo\u003e",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#Then User selects both \"Depart\" and \"return\""
    }
  ],
  "line": 9,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User decides \"class\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Prefered Airlines\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on \"Search\" Flight button",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 15,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;1"
    },
    {
      "cells": [
        "kolkata",
        "chennai"
      ],
      "line": 16,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4095926800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
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
  "name": "User selects the \"Roundtrip\" options",
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
  "comments": [
    {
      "line": 8,
      "value": "#Then User selects both \"Depart\" and \"return\""
    }
  ],
  "line": 9,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User decides \"class\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters \"Prefered Airlines\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on \"Search\" Flight button",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.user_is_on_cleartrip_landing_page()"
});
formatter.result({
  "duration": 6074634700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roundtrip",
      "offset": 18
    }
  ],
  "location": "CleartripStepDef.user_selects_the_roundtrip_options(String)"
});
formatter.result({
  "duration": 10141176600,
  "status": "passed"
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
  "duration": 14465039700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_decides_class_and_airlines()"
});
formatter.result({
  "duration": 15909608600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "class",
      "offset": 14
    }
  ],
  "location": "CleartripStepDef.user_enters_passenger_details(String)"
});
formatter.result({
  "duration": 20282110600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prefered Airlines",
      "offset": 13
    }
  ],
  "location": "CleartripStepDef.user_enters(String)"
});
formatter.result({
  "duration": 20154090100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 729284200,
  "status": "passed"
});
});