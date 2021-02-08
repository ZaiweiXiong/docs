package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class googlePage {
	
	private WebDriver driver;
	
	public googlePage(WebDriver driver) {
		
		this.driver=driver;
		
	}
	
	public String url () {
		
		
		return "https://www.google.com";
	}
	
	public By searchkeywork() {
		
		By searchword = By.cssSelector("input[name='q']");
		return searchword;
	}
	public By searchbutton() {
		By searchbutton = By.cssSelector("input[value='Google Search']");
		return searchbutton;
		
	}
	
	public String googleTitle() {
		return driver.getTitle();
	}

}
