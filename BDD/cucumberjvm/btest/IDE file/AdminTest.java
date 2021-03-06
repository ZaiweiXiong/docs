// Generated by Selenium IDE
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.core.IsNot.not;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import java.util.*;
import java.net.MalformedURLException;
import java.net.URL;
public class AdminTest {
  private WebDriver driver;
  private Map<String, Object> vars;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    js = (JavascriptExecutor) driver;
    vars = new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void admin() {
    driver.get("https://nag-admin.fxcrm.tk/login");
    driver.manage().window().setSize(new Dimension(981, 819));
    driver.findElement(By.id("staffCode")).click();
    driver.findElement(By.id("staffCode")).sendKeys("123456");
    driver.findElement(By.id("password")).click();
    driver.findElement(By.id("password")).sendKeys("123456");
    driver.findElement(By.id("loginSubmit")).click();
    driver.findElement(By.id("phone")).click();
    driver.findElement(By.id("phone")).sendKeys("6547324007");
    driver.findElement(By.id("queryUserDataBtn")).click();
    driver.findElement(By.name("docInfo")).click();
    driver.findElement(By.xpath("//div[@id=\'modal3_box_3\']/div/div/div[2]/div/span/span/span/span")).click();
    driver.findElement(By.cssSelector(".select2-search__field")).click();
    driver.findElement(By.cssSelector(".select2-search__field")).sendKeys("Applied");
    driver.findElement(By.id("saveAccStatus1")).click();
    driver.findElement(By.cssSelector(".confirm")).click();
    driver.findElement(By.cssSelector(".bg-blue-300 > .close")).click();
    driver.findElement(By.cssSelector(".dropdown-toggle > .caret")).click();
    driver.findElement(By.linkText("Logout")).click();
  }
}
