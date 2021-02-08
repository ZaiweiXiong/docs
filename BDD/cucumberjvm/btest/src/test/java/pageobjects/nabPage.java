package pageobjects;

import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class nabPage {
	
private WebDriver driver;
	
	public nabPage(WebDriver driver) {
		
		this.driver=driver;
		
	}
	
	public String url () {
		
		return "https://www.nab.com.au";
	}
	
	public By personal () {
		
		By  p  =  By.cssSelector("a.menu-trigger:nth-of-type(1)");
		return p;
	}
	
	public By homeLoans() {
		
		By hls =  By.cssSelector("ul[data-type='mega-menu']>li:nth-child(5)>a[href='/personal/home-loans']>span");
	
		return hls;
	
	}
	public By homeLoan() {
		
		 By hl =  By.cssSelector("div[class='nav-container']>ul[class='dropdown']>li>a[href='/personal/home-loans']>span:nth-child(1)");
		 return hl;
		
	}
	public By enquire() {
		
		By e = By.cssSelector("div[class='button-wrapper']>ul[class='link-list linklist']>li:nth-child(1)>a");
		return e;
	}
	
	public By getshawRoot() {
		
		By sr = By.xpath("//*[@id='contact-form-shadow-root']");
		return sr;
	}
	
	public void clickNextbutton() {
		
		Actions actionProvider = new Actions(driver);
		actionProvider.sendKeys(Keys.TAB).build().perform();
		actionProvider.sendKeys(Keys.ENTER).build().perform();
		
		//child windows
		Set<String> newWindowHands=driver.getWindowHandles();
		Iterator<String> ws= newWindowHands.iterator();
		
		while(ws.hasNext())
		{
			String child_window=ws.next();
	        driver.switchTo().window(child_window);
		}
		
		By no = By.xpath("//label[2]");
		driver.findElement(no).click();
	}
	
	
	
	public WebElement  waitElement(int secs,By x){
		
		
		WebDriverWait wait = new WebDriverWait(driver, secs);
		WebElement element = wait
							 .until(ExpectedConditions.elementToBeClickable(x));
		
		return element;
		
	}
	
	public void wait(int secs) {
		
		try {
			
			driver.manage().timeouts().implicitlyWait(secs,TimeUnit.SECONDS);
			Thread.sleep(secs*1000);
			
		}catch (Exception error) {
			
			System.out.print("Page is not loaded completely");
		}
		
	}
	
	public void getTexts (By x) {
        
        List<WebElement> eles= driver.findElements(x);
        
		 for (int i=0;i<eles.size();i++) {
			 
			  //if (eles.get(i).isDisplayed()) {System.out.println("eles=>,"+eles.get(i).getText());}
			   System.out.println("eles=>,"+eles.get(i).getText());
			 }
		
		 	System.out.println("=>"+eles.size());
		
	}

}
