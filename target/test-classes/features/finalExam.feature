@BothScenarios
Feature:  Background color validation
 
@Scenario1
Scenario:1  Sky Blue Background
Given Set SkyBlue Background button exists
When I click on the button
Then the background color will change to sky blue

@Scenario2
Scenario:2 White Background Change
Given Set SkyWhite Background button exists
When I click Set SkyWhite Background button 
Then the background color will change to white


