package stepdefinations;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.googlePage;
import base.Hook;

public class GoogleSearch {
	
private WebDriver driver;
googlePage google;
	
	public GoogleSearch() {
		this.driver = Hook.getDriver();
		google=new googlePage(driver);
	}
	
	@Given("^I go to google$")
	public void i_go_to_google() throws Exception {
	    driver.get(google.url());
	}

	@When("^I query for \"([^\"]*)\"$")
	public void i_query_for(String arg1) throws Exception {
		
		
	    driver.findElement(google.searchkeywork()).sendKeys(arg1);
	}

	@When("^click search$")
	public void click_search() throws Exception {
		
	    driver.findElement(google.searchbutton()).click();
	}

	@Then("^google page title should become \"([^\"]*)\"$")
	public void google_page_title_should_become(String arg1) throws Exception {
		
		String title = google.googleTitle();
		System.out.println("google title=>"+google.googleTitle());
		Assert.assertEquals(arg1, title);	
	   
	}

}
