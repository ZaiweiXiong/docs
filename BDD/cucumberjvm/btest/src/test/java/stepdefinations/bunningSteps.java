package stepdefinations;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.bunningPage;
import pageobjects.nabPage;
import base.Hook;

public class bunningSteps {
	
	private WebDriver driver;
	bunningPage bunn;
	nabPage  nab;
	
	public bunningSteps() {
		
		this.driver = Hook.getDriver();
		bunn        = new bunningPage(driver);
		nab         = new nabPage(driver);
	}
	

	@Given("^I go to bunning page$")
	public void i_go_to_bunning_page() throws Exception {
		
	   driver.get(bunn.url());
	    
	}

	@When("^type the \"([^\"]*)\" for search$")
	public void type_the_for_search(String words) throws Exception {
	    
	   driver.findElement(bunn.search()).sendKeys(words);
	   
	}

	@And("^Click search$")
	public void click_search() throws Exception {
	    
	  driver.findElement(bunn.searchButton()).click();
	}

	@Then("^The result is dispalyed$")
	public void the_result_is_dispalyed() throws Exception {
	   
	   //nab.getTexts(bunn.selectOne());
	   driver.findElement(bunn.selectOne()).click();
	 
	   driver.findElement(bunn.saveTobutton()).click();
	   nab.waitElement(6, bunn.wishlist());
	   driver.findElement(bunn.wishlist()).click();
	   
	   driver.findElement(bunn.remove()).click();
	   
	   
	   //Assert.assertEquals(bunn.getTitles(),"My Wish List");
	   
	   
	}

}
