package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

	public static WebDriver driver;
	
	public static void initDriver() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\salma\\OneDrive\\Desktop\\Selenium\\Clone\\FinalExamCucumberFramework\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.get("https://techfios.com/test/101/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	}
	
	public void takeScreenshot (WebDriver driver) {  
		 
		  TakesScreenshot takesScreenshot = (TakesScreenshot)driver;
		  File sourceFile = takesScreenshot.getScreenshotAs(OutputType.FILE);
		  String currentDirectory = System.getProperty("user.dir");
		  
		  SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		  Date date = new Date();  
		  String label = formatter.format(date);  
		  try {
		   FileUtils.copyFile(sourceFile, new File(currentDirectory + "/screenshots/" + label + ".png"));
		  } catch (IOException e) {
		   e.printStackTrace();
		  }  
	 }
	
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
