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
  "duration": 2305707000,
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
  "duration": 196113000,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 3062740500,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 248339300,
  "status": "passed"
});
formatter.before({
  "duration": 1729561300,
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
  "duration": 91536500,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.i_click_Set_SkyWhite_Background_button()"
});
formatter.result({
  "duration": 3074696200,
  "status": "passed"
});
formatter.match({
  "location": "TestStepDefinition.the_background_color_will_change_to_white()"
});
formatter.result({
  "duration": 265117100,
  "status": "passed"
});
});