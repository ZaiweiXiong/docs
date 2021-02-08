package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class bunningPage {

	
	private WebDriver driver;
	
	
	public bunningPage(WebDriver driver) {
		this.driver=driver;
	}
	
	public String url () {
		
		return "https://www.bunnings.com.au/";
	}
	
	public By search() {
		
		By s = By.cssSelector("input[data-page='/search']");
		return s;
	}
	
	public By searchButton() {
		
		By searchB = By.cssSelector("svg[class='search-container_icon-search']");
		return searchB;
	}
	
	public By selectOne() {
	    
		
		String article = "article[data-product-id='0162931']>a>div>div:nth-child(2)>div:nth-child(5)";
		By select      = By.cssSelector(article);
		
		return select;
	}
	
	public By saveTobutton () {
		
		By b = By.cssSelector("button[class$='bui-btn--small']");
		return b;
	}
	public By wishlist () {
		
		By wish = By.cssSelector("div[class='tooltip-wishlist-confirmation__container']>a[class='tooltip-wishlist-confirmation__link']");
		
		return wish;
	}
	
	public By remove() {
		
		By r = By.cssSelector("a[id='body_0_ctl03_ctl00_ctl00_ctl00_RemoveItemLinkButton']");
		
		return r;
	}
	
	public String getTitles() {
		
		String title =driver.findElement(By.cssSelector("h2[class='primaryh2 custom-title']")).getText();
		System.out.println(title);
		return title;
	}
}
