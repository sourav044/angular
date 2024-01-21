Feature: Delete the Schedules Created By Automation Testing

  I delete the created Schedules

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId136903
  Scenario: Create 2 Schedules
    When I click on Create new Schedule Button
    When I fill "Test Schedule delete 2" in Name
    When I fill "This schedule has been created from automation testing" in Description
    When I select "amazon\qa" in Worker Host
    When I select "Recording" as Job Setting
    When I select "CABLE Output (VB-Audio Virtual Cable)" in Source
    When I select "CH 1" in Channels
    When I select "amazon audio_TestAutomation" in Output table
    When I fill "Test Recording" in Output title
    When I select "48 kHz 16 bit" in Format
    When I select "2022-12-27" in Start date
    When I click on Create button
    Then I am in dashboard
    When I click on Create new Schedule Button
    When I fill "Test Schedule delete 3" in Name
    When I fill "This schedule has been created from automation testing" in Description
    When I select "amazon\qa" in Worker Host
    When I select "Recording" as Job Setting
    When I select "CABLE Output (VB-Audio Virtual Cable)" in Source
    When I select "CH 1" in Channels
    When I select "amazon audio_TestAutomation" in Output table
    When I fill "Test Recording" in Output title
    When I select "48 kHz 16 bit" in Format
    When I select "2022-12-27" in Start date
    When I click on Create button
    Then I delete the Schedules name with "Test Schedule delete 2" and "Test Schedule delete 3"


