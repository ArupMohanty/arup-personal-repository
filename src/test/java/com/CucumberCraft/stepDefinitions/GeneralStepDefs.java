package com.CucumberCraft.stepDefinitions;

import static org.testng.Assert.assertTrue;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import com.CucumberCraft.supportLibraries.DriverManager;
import com.CucumberCraft.supportLibraries.Util;

import cucumber.api.java.en.Given;

public class GeneralStepDefs extends MasterStepDefs {

	static Logger log = Logger.getLogger(LoginStepDefs.class);
	WebDriver driver = DriverManager.getWebDriver();

	@Given("^I am in the login page of the application$")
	public void i_am_in_login_page() {
		driver.get("https://www.skyscanner.net/");

		currentScenario.embed(Util.takeScreenshot(driver),
				"image/png");

		assertTrue(driver.getTitle().contains("Skyscanner")
				|| driver.getTitle().contains("Compare Cheap Flights, Hotels & Car Hire"));
	}
	
	@Given("^User is on cleartrip landing page$")
    public void user_is_on_cleartrip_landing_page() throws Throwable {
		
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-notifications");
		//driver = new ChromeDriver(options);
		driver.get("https://www.cleartrip.com/");
		driver.manage().window().maximize();
		System.out.println(driver.getTitle());
		System.out.println(driver.findElement(By.cssSelector("form[id='SearchForm'] h1")).getText());
		Thread.sleep(3000);
    }
	
}