package com.CucumberCraft.stepDefinitions;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.CucumberCraft.pageObjects.CleartripPOM;
import com.CucumberCraft.supportLibraries.DriverManager;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CleartripStepDef {
	
	static Logger log = Logger.getLogger(CleartripStepDef.class);
	//WebDriver driver = DriverManager.getWebDriver();
	CleartripPOM cleartripPOM = new CleartripPOM();

    @When("^User selects the \"([^\"]*)\" options$")
    public void user_selects_the_roundtrip_options(String triptype) throws Throwable {
    	cleartripPOM.triptype(triptype);
    }

    @When("^User enters destinations from (.+) and To (.+)$")
    public void user_enters_destinations_from_and_to(String from, String to) throws Throwable {
    	cleartripPOM.searchFlight(from, to);
        
    }

   @Then("^User selects both Depart and return$")
   public void user_selects_both_depart_and_return() throws Throwable {
   cleartripPOM.travelDate();  
   }

   @And("^User enters Passenger Details$")
   public void user_decides_class_and_airlines() throws Throwable {
   cleartripPOM.passenger();
   }
   
    @And("^User enters class details$")
    public void user_enters_class_details() throws Throwable {
    cleartripPOM.classOfTravel();
   }
    
    @And("^user enters Prefered Airlines$")
    public void user_enters_prefered_airlines() throws Throwable {
    	cleartripPOM.preferedAirlines();
    }
    
    
    
    @And("^User click on Search Flight button$")
    public void user_click_on_search_flight_button() throws Throwable {
    	cleartripPOM.Submit();  
    }

}
