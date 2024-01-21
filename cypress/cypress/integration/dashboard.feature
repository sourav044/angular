Feature: amazon audio Scheduling landing page

  I validate amazon audio Scheduling landing page

  Background:
    Given I navigate to amazon audio SCHEDULING page

  @caseId115336
  Scenario: I validate the user
    Then I see "amazon audioTU" in the user

  @caseId115337
  Scenario: Validating Host Name Field
    When I change the Host Name to "amazon\qa"
    Then I see Host Name with "amazon\qa"

  @caseId115335
  Scenario: Filter Schedule Name
    When I change the Search Schedule Name to "Test schedule expected every Monday"
    Then I see Schedule Name with "Test schedule expected every Monday"



