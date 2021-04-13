$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Cleartrip.feature");
formatter.feature({
  "line": 1,
  "name": "Cleartrip Application Login",
  "description": "",
  "id": "cleartrip-application-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Book ticket in Cleartrip",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CleartripFlightSearch2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on cleartrip landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User selects the \"Roundtrip\" options",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters destinations from \u003cFrom\u003e and To \u003cTo\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User selects both Depart and return",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters class details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters Prefered Airlines",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Search Flight button",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;",
  "rows": [
    {
      "cells": [
        "From",
        "To"
      ],
      "line": 31,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;1"
    },
    {
      "cells": [
        "kolkata",
        "chennai"
      ],
      "line": 32,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;2"
    },
    {
      "cells": [
        "mumbai",
        "kolkata"
      ],
      "line": 33,
      "id": "cleartrip-application-login;book-ticket-in-cleartrip;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4339932200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Book ticket in Cleartrip",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CleartripFlightSearch2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on cleartrip landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User selects the \"Roundtrip\" options",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters destinations from kolkata and To chennai",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User selects both Depart and return",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters class details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters Prefered Airlines",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Search Flight button",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.user_is_on_cleartrip_landing_page()"
});
formatter.result({
  "duration": 5924764500,
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
  "duration": 10138952600,
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
  "duration": 14474833700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_both_depart_and_return()"
});
formatter.result({
  "duration": 16462365700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_decides_class_and_airlines()"
});
formatter.result({
  "duration": 13814479900,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_enters_class_details()"
});
formatter.result({
  "duration": 12434181500,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_enters_prefered_airlines()"
});
formatter.result({
  "duration": 14270615200,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_click_on_search_flight_button()"
});
formatter.result({
  "duration": 30102542900,
  "status": "passed"
});
formatter.after({
  "duration": 746300600,
  "status": "passed"
});
formatter.before({
  "duration": 3085901100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Book ticket in Cleartrip",
  "description": "",
  "id": "cleartrip-application-login;book-ticket-in-cleartrip;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@CleartripFlightSearch2"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "User is on cleartrip landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User selects the \"Roundtrip\" options",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters destinations from mumbai and To kolkata",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User selects both Depart and return",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User enters Passenger Details",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User enters class details",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user enters Prefered Airlines",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User click on Search Flight button",
  "keyword": "And "
});
formatter.match({
  "location": "GeneralStepDefs.user_is_on_cleartrip_landing_page()"
});
formatter.result({
  "duration": 6081353100,
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
  "duration": 10112595900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mumbai",
      "offset": 30
    },
    {
      "val": "kolkata",
      "offset": 44
    }
  ],
  "location": "CleartripStepDef.user_enters_destinations_from_and_to(String,String)"
});
formatter.result({
  "duration": 14425104600,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_both_depart_and_return()"
});
formatter.result({
  "duration": 16466627900,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_decides_class_and_airlines()"
});
formatter.result({
  "duration": 13852239700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_enters_class_details()"
});
formatter.result({
  "duration": 12445166100,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_enters_prefered_airlines()"
});
formatter.result({
  "duration": 14238061700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_click_on_search_flight_button()"
});
formatter.result({
  "duration": 30105071800,
  "status": "passed"
});
formatter.after({
  "duration": 730274800,
  "status": "passed"
});
});