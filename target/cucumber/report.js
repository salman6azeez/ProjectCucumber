$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/finalExam.feature");
formatter.feature({
  "line": 2,
  "name": "Background color validation",
  "description": "",
  "id": "background-color-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BothScenarios"
    }
  ]
});
formatter.before({
  "duration": 3482272600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "1  Sky Blue Background",
  "description": "",
  "id": "background-color-validation;1--sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDefinition.set_skyblue_button_exist()"
});
formatter.result({
  "duration": 170037600,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 3057325400,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 219938400,
  "status": "passed"
});
formatter.before({
  "duration": 2008129800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "2 White Background Change",
  "description": "",
  "id": "background-color-validation;2-white-background-change",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click Set SkyWhite Background button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the background color will change to white",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDefinition.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 80999500,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.i_click_Set_SkyWhite_Background_button()"
});
formatter.result({
  "duration": 3058393700,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 221948400,
  "status": "passed"
});
});