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
  "duration": 4081553500,
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
  "duration": 9263678500,
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
  "duration": 10138005500,
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
  "duration": 14575369700,
  "status": "passed"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_both_depart_and_return(String,String)"
});
formatter.result({
  "duration": 737400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.CucumberCraft.stepDefinitions.CleartripStepDef.user_selects_both_depart_and_return(String,String) in file:/C:/CRAFT/CRAFT_Cucumber/target/test-classes/\u0027 with pattern [^User selects both Depart and return$] is declared with 2 parameters. However, the gherkin step has 0 arguments []. \nStep: Then User selects both Depart and return\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
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
  "duration": 703832700,
  "status": "passed"
});
});