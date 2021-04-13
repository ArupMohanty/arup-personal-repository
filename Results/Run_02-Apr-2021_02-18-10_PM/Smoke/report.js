$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sample.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "As a user, I want to be able to login to the application\r\nwhen I present valid credentials",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I search using the valid origin \"\u003cOrigin\u003e\" and the valid destination \"\u003cDestination\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;",
  "rows": [
    {
      "cells": [
        "Origin",
        "Destination"
      ],
      "line": 13,
      "id": "login;login-with-valid-username-and-valid-password;;1"
    },
    {
      "cells": [
        "CCU",
        "LHR"
      ],
      "line": 14,
      "id": "login;login-with-valid-username-and-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4464218100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in the login page of the application",
  "keyword": "Given "
});
formatter.match({
  "location": "GeneralStepDefs.i_am_in_login_page()"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 2677098000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid username and valid password",
  "description": "",
  "id": "login;login-with-valid-username-and-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I search using the valid origin \"CCU\" and the valid destination \"LHR\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "CCU",
      "offset": 33
    },
    {
      "val": "LHR",
      "offset": 65
    }
  ],
  "location": "LoginStepDefs.i_search_using_the_valid_origin_and_the_valid_destination(String,String)"
});
formatter.result({
  "duration": 22281022600,
  "status": "passed"
});
formatter.after({
  "duration": 580853500,
  "status": "passed"
});
});