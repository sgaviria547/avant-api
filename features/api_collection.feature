Feature: Check status of Get Account Info

    In order to get info from an specific account
    As QA user
    I want to make sure that correct status is being returned

    Scenario: check status and body content for get account
        Given I make a POST request to /get_account_information
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a matching json schema



    Scenario: check status for find matches
        Given I make a POST request to /find_matches
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a matching json schema



    Scenario: check status for update identity 
        Given I make a POST request to /update_identity
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a matching json schema

    

    Scenario: check status and body content for get profile info
        Given I make a POST request to /get_profile_information
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a matching json schema


    
    Scenario: check status and body content for update profile info
        Given I make a POST request to /update_profile_information
        When I receive a response
        Then I expect response should have a status 200
        And I expect response should have a matching json schema