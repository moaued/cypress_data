Feature: Login into the site with valid data

  Scenario Outline: Scenario Outline name: Login into the application with valid data
      When I click on Sign In Link
      And I entered valid credential '<email>' '<validpassword>'
      And click on sign in button
      Then Validate user is logged in
      Then Validate the title after login
      When I click on Codeless link
      Then Validate Codeless link should be open
      When I click logout link
      Examples:
     | email                    | validpassword |
          | xxxxxx@gmail.com | xxxxx@1234     |



Scenario:export data from excel to database
And export data from excel to sql
And should write data to an Excel file





