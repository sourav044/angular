Feature: Create Scheduling

  I validate Create Schedule page using Recording

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId-2
  Scenario: Create Scheduling Using Template
    When I click on Create new Schedule Button
    When I fill "Test Schedule Automation" in Name
    When I fill "This schedule has been created from automation testing" in Description
    When I select "amazon\qa" in Worker Host
    When I select "From template" as Job Setting
    When I select "Playout" in Type
    When I select "Simple Playout" in Template
    When I select "2022-12-26" in Start date
    When I click on Create button
    Then I am in dashboard
    And I have one selected item with name "Test Schedule Automation" and date "2022-12-26"
    And I delete the schedule with name "Test Schedule Automation" and date "2022-12-26"