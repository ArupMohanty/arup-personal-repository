package com.CucumberCraft.pageObjects;
import java.util.List;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.CucumberCraft.supportLibraries.DriverManager;
import com.CucumberCraft.supportLibraries.WebDriverUtil;

public class CleartripPOM {
	
static Logger log = Logger.getLogger(CleartripPOM.class);
	
    public static final String triptype = "//input[@id='RoundTrip']";
	public static final String fromTextBox = "//input[@id='FromTag']";
	public static final String toTextBox = "//input[@id='ToTag']";
	public static final String departDate = "//input[@id='DepartDate']";
	//public static final String returnDate = "//input[@id='ReturnDate']";
	public static final String Adult = "//select[@id='Adults']";
	public static final String Children = "//select[@id='Childrens']";
	public static final String Infant = "//select[@id='Infants']";
	public static final String classOfTravel = "//select[@id='Class']";
	public static final String preferedAirlines = "//input[@id='AirlineAutocomplete']";
	public static final String searchButton = "//input[@id='SearchBtn']";
	
	
	//@SuppressWarnings("rawtypes")
	WebDriver driver = DriverManager.getWebDriver();
	WebDriverUtil webDriverUtil = new WebDriverUtil(driver);
	
	public void searchFlight(String from, String to) {
		webDriverUtil.waitFor(10000);
		try {
			//From Text Box
			webDriverUtil.waitUntilElementLocated(By.xpath(CleartripPOM.fromTextBox), 10000);
			driver.findElement(By.xpath(CleartripPOM.fromTextBox)).clear();
			driver.findElement(By.xpath(CleartripPOM.fromTextBox)).sendKeys(from);
			Thread.sleep(2000);
			List<WebElement> options1 =driver.findElements(By.xpath("//input[@id='FromTag']"));
			for(WebElement option :options1)

			{

			if(option.getText().equalsIgnoreCase("from"))

			{

			option.click();

			break;
			
			}
			}
			
			//To Text Box
			webDriverUtil.waitUntilElementLocated(By.xpath(CleartripPOM.toTextBox), 10000);
			driver.findElement(By.xpath(CleartripPOM.toTextBox)).clear();
			driver.findElement(By.xpath(CleartripPOM.toTextBox)).sendKeys(to);
			Thread.sleep(2000);
			List<WebElement> options2 =driver.findElements(By.xpath("//input[@id='ToTag']"));
			for(WebElement option2 :options2)

			{

			if(option2.getText().equalsIgnoreCase("to"))

			{

			option2.click();

			break;

			}
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public void triptype(String triptype) {
		webDriverUtil.waitFor(10000);
		try {
			//journey type as RoundTrip
			driver.findElement(By.xpath(CleartripPOM.triptype)).click();
			
		 }
		catch (Exception e) {
			e.printStackTrace();
		}
		 
	}
			
	public void travelDate() {
				webDriverUtil.waitFor(10000);
				try {
								
					driver.findElement(By.xpath(CleartripPOM.departDate)).click();
					driver.findElement(By.xpath("//div[@class='monthBlock first']//div[@class='title']")).getText();
					driver.findElement(By.xpath("//a[contains(@class,'nextMonth')]")).click();
					Thread.sleep(2000);
					driver.findElement(By.xpath("//div[@class='monthBlock first']/table/tbody/tr[3]/td[4]")).click();
					Thread.sleep(2000);
					driver.findElement(By.xpath("//div[@class='monthBlock first']/table/tbody/tr[4]/td[4]")).click();
					Thread.sleep(2000); 
				 }
				catch (Exception e) {
					e.printStackTrace();
				}
				 
			}
			
			
			
	public void passenger() {
			webDriverUtil.waitFor(10000);
			try {
				//Adult Passenger
				WebElement staticDropdown = driver.findElement(By.xpath(CleartripPOM.Adult));
		    	Select dropdown = new Select(staticDropdown);
				dropdown.selectByIndex(4);
				System.out.println(dropdown.getFirstSelectedOption().getText());
				Thread.sleep(1000);
				
				
				WebElement staticDropdown1 = driver.findElement(By.xpath(CleartripPOM.Children));
				Select dropdown1 = new Select(staticDropdown1);
				dropdown1.selectByIndex(2);
				System.out.println(dropdown1.getFirstSelectedOption().getText());
				Thread.sleep(1000);
				
				
				WebElement staticDropdown2 = driver.findElement(By.xpath(CleartripPOM.Infant));
				Select dropdown2 = new Select(staticDropdown2);
				dropdown2.selectByIndex(1);
				System.out.println(dropdown2.getFirstSelectedOption().getText());
				Thread.sleep(1000);
			 }
			catch (Exception e) {
				e.printStackTrace();
			}
			 
		}
			
			
	public void classOfTravel() {
				webDriverUtil.waitFor(10000);
				try {
					//classOfTravel
						driver.findElement(By.xpath("//i[@class='rArrow blue']")).click();
						Thread.sleep(1000);
						WebElement staticDropdown4 = driver.findElement(By.xpath(CleartripPOM.classOfTravel));
						Select dropdown4 = new Select(staticDropdown4);
						dropdown4.selectByIndex(3);
						System.out.println(dropdown4.getFirstSelectedOption().getText());
						Thread.sleep(1000);
				 }
				catch (Exception e) {
					e.printStackTrace();
				}
				 
			}
			
			
	public void preferedAirlines() {
				webDriverUtil.waitFor(10000);
				try {
					//classOfTravel
						driver.findElement(By.xpath(CleartripPOM.preferedAirlines)).sendKeys("Vistara");
						Thread.sleep(2000);
						List<WebElement> options3 =driver.findElements(By.xpath("//a[normalize-space()='Vistara (UK)']"));
						for(WebElement option3 :options3)

						{

						if(option3.getText().equalsIgnoreCase("Vistara (UK)"))

						{

						option3.click();

						break;
						

						}
						}
						
						Thread.sleep(2000);
				 }
				catch (Exception e) {
					e.printStackTrace();
				}
				 
			}
			
				
	public void Submit() {
				webDriverUtil.waitFor(10000);
				try {
					//classOfTravel
						driver.findElement(By.xpath(CleartripPOM.searchButton)).click();
						webDriverUtil.waitFor(20000);
				 }
				catch (Exception e) {
					e.printStackTrace();
				}
				 
			}
			
		
		}
		

	
		
		
		
		

