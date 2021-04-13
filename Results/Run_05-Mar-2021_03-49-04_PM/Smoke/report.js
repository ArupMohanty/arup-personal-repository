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
  "duration": 2152328800,
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
formatter.result({
  "duration": 357269400,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:77)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:41)\r\n\tat com.CucumberCraft.stepDefinitions.GeneralStepDefs.\u003cinit\u003e(GeneralStepDefs.java:16)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:37)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n\tat ✽.Given I am in the login page of the application(Sample.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.after({
  "duration": 5070100,
  "error_message": "java.lang.NullPointerException\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.setWebDriver(DriverManager.java:77)\r\n\tat com.CucumberCraft.supportLibraries.DriverManager.getWebDriver(DriverManager.java:41)\r\n\tat com.CucumberCraft.stepDefinitions.CukeHooks.embedScreenshot(CukeHooks.java:152)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:108)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:661)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:869)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1193)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:126)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:744)\r\n\tat org.testng.TestRunner.run(TestRunner.java:602)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:380)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:414)\r\n\tat org.testng.internal.thread.ThreadUtil$1.call(ThreadUtil.java:52)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
});