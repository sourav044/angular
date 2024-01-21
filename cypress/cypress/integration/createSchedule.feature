Feature: Create Scheduling

  I validate Create Schedule page using Recording

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId1
  Scenario: Create Scheduling
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
    When I select "2022-11-26" in Start date
    When I click on Create button
    Then I am in dashboard
    And I have one selected item with name "Test Schedule Automation" and date "2022-11-26"
    And I delete the schedule with name "Test Schedule Automation" and date "2022-11-26"


