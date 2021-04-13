Feature: Cleartrip Application Login

@CleartripFlightSearch1
Scenario Outline: Search flight in Cleartrip
Given User is on cleartrip landing page
When User selects the "Roundtrip" options
When User enters destinations from <From> and To <To>
Then User selects both Depart and return
And User enters Passenger Details
And User enters class details
And user enters Prefered Airlines
And User click on Search Flight button

Examples:
	|From	    |To	        |
	|kolkata	|chennai	|
	
	
@CleartripFlightSearch2
Scenario Outline: Book ticket in Cleartrip
Given User is on cleartrip landing page
When User selects the "Roundtrip" options
When User enters destinations from <From> and To <To>
Then User selects both Depart and return
And User enters Passenger Details
And User enters class details
And user enters Prefered Airlines
And User click on Search Flight button

Examples:
	|From	    |To	        |
	|kolkata	|chennai	|
	|mumbai	    |kolkata	|
	