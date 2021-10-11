const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const data = require('../../data/payloads')
const schemas = require('../../data/schemas')

let spec = pactum.spec();
const url = "https://www.avant.uat1.amount.com/api/v3/customer_management/inbound_request"
const auth = "https://www.avant.uat1.amount.com/api/v3/customer_management/auth/token"
let body, schema

Before(async () => {
  resp = await pactum.spec().post(auth).withHeaders('authorization', 'Basic YXZhbnQ6MDg3OTMzYzJiNjUxZTEwOGNhMjRiYmRiYzZkYjQwNzE=').toss();
  auth_token = resp.body.access_token
  //console.log(auth_token)
});

Given(/^I make a POST request to (.*)$/, function (endpoint) {
  if (endpoint == "/get_account_information") {
    body = data.customer
    schema = schemas.customer_sh
  } else if (endpoint == "/find_matches") {
    body = data.matches
    schema = schemas.matches_sh
  } else if (endpoint == "/update_identity") {
    body = data.update_identity
    schema = schemas.update_identity_sh
  } else if (endpoint == "/get_profile_information") {
    body = data.customer
    schema = schemas.profile_info_sh
  } else if (endpoint == "/update_profile_information") {
    body = data.update_profile_info
    schema = schemas.update_profile_info_sh
  }

  spec = pactum.spec();
  spec.post(url + endpoint)
    .withHeaders('authorization', 'Bearer ' + auth_token)
    .withBody(body)
    .expectStatus(200);
});


When('I receive a response', async function () {
  response = await spec.toss();
  //console.log(response.body)
});

Then('I expect response should have a status {int}', function (code) {
  spec.response().should.have.status(code);
});

Then('I expect response should have a matching json schema', function () {
  spec.response().should.have.jsonSchema(schema);
});