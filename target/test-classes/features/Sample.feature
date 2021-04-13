Feature: Login 
	As a user, I want to be able to login to the application
	when I present valid credentials

Background:
	Given I am in the login page of the application

@Search
Scenario Outline: Login with valid username and valid password
	When I search using the valid origin "<Origin>" and the valid destination "<Destination>"
	
	Examples:
	|Origin		|Destination	|
	|CCU		|LHR	|
#	|test		|test		|