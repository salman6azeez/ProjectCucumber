package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ElementsPage {

	WebDriver driver;
	public ElementsPage(WebDriver driver) {
	this.driver = driver;
	}

	// Element Library
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[1]")
	WebElement SetSkyBlueBackgroundButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	WebElement SetWhiteBackgroundButton;

	// Methods to interact with the elements
	public void clickSetSkyBlueBackgroundButton() {
		SetSkyBlueBackgroundButton.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSetWhiteBackground() {
		SetWhiteBackgroundButton.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
}
