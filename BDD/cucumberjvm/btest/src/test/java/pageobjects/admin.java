package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

public class admin {
	
	private WebDriver driver;
	
	public admin (WebDriver driver) {
		this.driver = driver;
	}
	
	public String admin_url () {
		
		return "https://nag-admin.fxcrm.tk/login";
	}
	public admin user(String user) {
		driver.findElement(By.id("staffCode")).sendKeys(user);
		return this;
	}
	public admin password(String pw) {
		driver.findElement(By.id("password")).sendKeys(pw);
		return this;
	}
	
	public admin login() {
		driver.findElement(By.id("loginSubmit")).click();
		return this;
	}
	
	public admin find_user(String ph) {
		
		driver.findElement(By.id("phone")).sendKeys(ph);
		driver.findElement(By.id("queryUserDataBtn")).click();
		driver.findElement(By.name("docInfo")).click();
		return this;
	}
	
	public admin active_user() {
		
		driver.findElement(By.xpath("//div[@id='modal3_box_3']/div/div/div[2]/div/span/span/span/span")).click();
	    driver.findElement(By.cssSelector(".select2-search__field")).click();
	    driver.findElement(By.cssSelector(".select2-search__field")).sendKeys("Applied");
	    driver.findElement(By.cssSelector(".select2-search__field")).sendKeys(Keys.ARROW_DOWN,Keys.ENTER);
		
	    try {
			Thread.sleep(3000);
		}catch(Exception error) {
			error.printStackTrace();
		}
		
		driver.findElement(By.id("saveAccStatus1")).click();
		try {
			Thread.sleep(3000);
		}catch(Exception error) {
			error.printStackTrace();
		}
		driver.findElement(By.cssSelector(".confirm")).click();
		
		try {
			Thread.sleep(3000);
		}catch(Exception error) {
			error.printStackTrace();
		}
		driver.findElement(By.cssSelector(".bg-blue-300 > .close")).click();
		
		driver.findElement(By.id("phone")).clear();
		driver.findElement(By.id("phone")).sendKeys("6547324007");
		driver.findElement(By.id("queryUserDataBtn")).click();
		
		try {
			Thread.sleep(3000);
		}catch(Exception error) {
			error.printStackTrace();
		}
		
	    return this;
	}

}
