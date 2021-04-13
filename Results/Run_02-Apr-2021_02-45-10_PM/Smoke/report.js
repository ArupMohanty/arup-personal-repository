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
  "duration": 2020867100,
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
  "duration": 191716400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:77)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:41)\r\n\tat com.CucumberCraft.stepDefinitions.GeneralStepDefs.\u003cinit\u003e(GeneralStepDefs.java:19)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n\tat ✽.Given User is on cleartrip landing page(src/test/resources/features/Cleartrip.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CleartripStepDef.user_selects_the_roundtrip_options()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 770600,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:77)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:41)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:152)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:375)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:340)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:289)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1301)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1226)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1144)\r\n\tat org.testng.TestNG.run(TestNG.java:1115)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\n",
  "status": "failed"
});
});