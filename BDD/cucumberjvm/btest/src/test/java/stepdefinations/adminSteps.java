package stepdefinations;

import org.openqa.selenium.WebDriver;

import base.Hook;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageobjects.admin;


public class adminSteps {
	
	private WebDriver driver;
	admin ad; 
	
	public adminSteps() {
		this.driver = Hook.getDriver();
		ad   = new admin(driver);
		
	}
	
	@Given("^give to admin page$")
	public void give_to_admin_page() throws Throwable {
		
		driver.get(ad.admin_url());
	   
	}

	@When("^login in \"([^\"]*)\" and \"([^\"]*)\"$")
	public void login_in_and(String user, String pw) throws Throwable {
		
		ad.user(user).password(pw).login();
	   
	}

	@Then("^find the registered users by phone \"([^\"]*)\"$")
	public void find_the_registered_users_by_phone(String phone) throws Throwable {
	    
		ad.find_user(phone);
	}

	@Then("^Active the registered users$")
	public void active_the_registered_users() throws Throwable {
		
	  ad.active_user();
	}

}
