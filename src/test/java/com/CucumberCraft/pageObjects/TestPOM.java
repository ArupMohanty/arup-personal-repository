package com.CucumberCraft.pageObjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.CucumberCraft.supportLibraries.DriverManager;
import com.CucumberCraft.supportLibraries.WebDriverUtil;

import io.appium.java_client.AppiumDriver;

public class TestPOM {

	static Logger log = Logger.getLogger(TestPOM.class);
	
	public static final String fromTextBox = "//input[@id='fsc-origin-search']";
	public static final String toTextBox = "//input[@id='fsc-destination-search']";
	public static final String searchButton = "//button[@aria-label='Search flights']";
	
	
	@SuppressWarnings("rawtypes")
	WebDriver driver = DriverManager.getWebDriver();
	WebDriverUtil webDriverUtil = new WebDriverUtil(driver);
	
	public void searchFlight(String from, String to) {
		webDriverUtil.waitFor(10000);
		try {
			//From Text Box
			webDriverUtil.waitUntilElementLocated(By.xpath(TestPOM.fromTextBox), 10000);
			driver.findElement(By.xpath(TestPOM.fromTextBox)).clear();
			driver.findElement(By.xpath(TestPOM.fromTextBox)).sendKeys(from);
			
			//To Text Box
			webDriverUtil.waitUntilElementLocated(By.xpath(TestPOM.toTextBox), 10000);
			driver.findElement(By.xpath(TestPOM.toTextBox)).clear();
			driver.findElement(By.xpath(TestPOM.toTextBox)).sendKeys(from);
			//Submit
			webDriverUtil.waitUntilElementLocated(By.xpath(TestPOM.searchButton), 10000);
			driver.findElement(By.xpath(TestPOM.searchButton)).click();
			
			webDriverUtil.waitFor(20000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		
		
	}
	
}
