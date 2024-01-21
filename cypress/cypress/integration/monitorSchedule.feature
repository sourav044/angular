Feature: Create Scheduling

  I validate Create Schedule page using Recording

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId137147
  Scenario: Monitor Scheduling
    When I click on Create new Schedule Button
    When I fill "Test Schedule Monitor" in Name
    When I fill "This schedule has been created from automation testing" in Description
    When I select "amazon\qa" in Worker Host
    When I select "Recording" as Job Setting
    When I select "CABLE Output (VB-Audio Virtual Cable)" in Source
    When I select "CH 1" in Channels
    When I select "amazon audio_TestAutomation" in Output table
    When I fill "Test Recording" in Output title
    When I select "48 kHz 16 bit" in Format
    When I put Current date as Start date
    When I put Current time as Start time
    When I put "00:05:00" min as Duration time
    When I click on Create button
    Then I am in dashboard
    When I click on Refresh button
    When I change the Search Schedule Name to "Test Schedule Monitor"
    Then I have one item name with "Test Schedule Monitor" and next occurrence "Pending"
    When I wait "30000" ms
    When I click on Refresh button
    Then I have one item name with "Test Schedule Monitor" and next occurrence "Running"
    Given I navigate to amazon audio Admin page
    When I fill "Test Schedule Monitor" in Job name
    When I click on Inactive button
    When I click on Apply button
    Then I have one item name with "Test Schedule Monitor" and status "Running"
    Then I check the time
    Given I navigate to amazon audio SCHEDULING page
    When I change the Search Schedule Name to "Test Schedule Monitor"
    Then I delete the schedule with name "Test Schedule Monitor" and next occurrence "none"

