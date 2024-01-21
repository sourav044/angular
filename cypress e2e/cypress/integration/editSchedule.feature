Feature: Edit a Schedule

  I modify the created Schedules

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId136904
  Scenario: Edit a Schedule
    When I click on Create new Schedule Button
    When I fill "Test Schedule Automation" in Name
    When I fill "This schedule has been created from automation testing" in Description
    When I select "amazon\qa" in Worker Host
    When I select "Recording" as Job Setting
    When I select "CABLE Output (VB-Audio Virtual Cable)" in Source
    When I select "CH 1" in Channels
    When I select "amazon audio_TestAutomation" in Output table
    When I fill "Test Recording" in Output title
    When I select "48 kHz 16 bit" in Format
    When I select "2022-12-10" in Start date
    Then I click on Create button
    Then I am in dashboard
    Then I select the created schedule name as "Test Schedule Automation"
    When I fill "Test Schedule Automation Updated" in Name
    When I fill "This schedule has been created from automation testing Update the values" in Description
    When I select "amazon\qa" in Worker Host
    When I select "Recording" as Job Setting
    When I select "CH 2" in Channels
    When I fill "Test Recording Updated" in Output title
    When I select "48 kHz 24 bit" in Format
    When I select "2022-12-11" in Start date
    Then I click on Create button
    Then I am in dashboard
    And I have one selected item with name "Test Schedule Automation Updated" and description "This schedule has been created from automation testing Update the values"
    And I delete the schedule with name "Test Schedule Automation Updated" and date "2022-12-11"






