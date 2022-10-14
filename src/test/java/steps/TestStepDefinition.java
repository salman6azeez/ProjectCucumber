package steps;

import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ElementsPage;
import pages.TestBase;

public class TestStepDefinition extends TestBase {
	ElementsPage elementsPage;

	@Before
	public void setUp() {
		initDriver();
		elementsPage = PageFactory.initElements(driver, ElementsPage.class);
	}

	@Given("^Set SkyBlue Background button exists$")
	public void set_skyblue_button_exist() {
		String text = driver.findElement(By.xpath("//button[contains (text() , 'Set SkyBlue Background')]")).getText();

		// to check that the page has button calls Set SkyBlue Background
		if (driver.getPageSource().contains("Set SkyBlue Background"))

		{
			System.out.println("The Background button: " + text + " exists"); // if the button exist print that in a
																				// console
		} else
			System.out.println("The Background button: " + text + " does not exists");

	}

	@When("^I click on the button$")
	public void i_click_on_the_button() throws Throwable {
		elementsPage.clickSetSkyBlueBackgroundButton();

	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue() throws Throwable {
		takeScreenshot(driver);
	}

	@Given("^Set SkyWhite Background button exists$")
	public void set_SkyWhite_Background_button_exists() throws Throwable {

		String text = driver.findElement(By.xpath("//button[contains (text() , 'Set White Background')]")).getText();
		//
		if (driver.getPageSource().contains("Set White Background")) // to check that the page has the background
																		// button
		{
			System.out.println("The Background button: " + text + " exists."); // if the button exist print that in a
																				// console
		} else
			System.out.println("The Background button: " + text + " does not   exists.");

	}

	@When("^I click Set SkyWhite Background button$")
	public void i_click_Set_SkyWhite_Background_button() throws Throwable {
		elementsPage.clickSetWhiteBackground();

	}

	@Then("^the background color will change to white$")
	public void the_background_color_will_change_to_white() throws Throwable {
		takeScreenshot(driver);
	}

	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
}
