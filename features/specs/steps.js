const pactum = require('pactum');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const data = require('../../data/payloads')
const schemas = require('../../data/schemas')

let spec = pactum.spec();
const url = "https://www.avant.uat1.amount.com/api/v3/customer_management/inbound_request"
const auth = "https://www.avant.uat1.amount.com/api/v3/customer_management/auth/token"
let body, schema

Before(async() => { 
  spec = pactum.spec(); 

  pactum.spec().post(auth).withHeaders('authorization','Basic YXZhbnQ6MDg3OTMzYzJiNjUxZTEwOGNhMjRiYmRiYzZkYjQwNzE=').expectStatus(200);
  //.stores(token, '#access_token');
  //console.error(token)
  
});

Given(/^I make a POST request to (.*)$/, function (endpoint) {


  if (endpoint == "/get_account_information"){
    body = data.customer
    schema = schemas.customer_sh
  }else if (endpoint == "/find_matches"){
    body = data.matches
    schema = schemas.matches_sh
  }else if (endpoint == "/update_identity"){
    body = data.update_identity
    schema = schemas.update_identity_sh
  }else if (endpoint == "/get_profile_information"){
    body = data.customer
    schema = schemas.profile_info_sh
  }else if (endpoint == "/update_profile_information"){
    body = data.update_profile_info
    schema = schemas.update_profile_info_sh
  }

  spec.post(url+endpoint)
    .withHeaders('authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzI3ODE5MTgsImV4cCI6MTYzMjg2ODMxOCwianRpIjoiZDZkMTRkMGEtMTFmZC00ODIzLWEzYmMtYThiMDY4MzM3MDA3In0.J8NJk1sO3yHCfapq0Jcu_5a_F0ySkIouQz8GjrTy018')
    .withBody(body)
    .expectStatus(200);
});


When('I receive a response', async function () {
  response = await spec.toss();
  console.log (response)
});

Then('I expect response should have a status {int}', function (code) {
  spec.response().should.have.status(code);
});

Then('I expect response should have a matching json schema', function () {
  spec.response().should.have.jsonSchema(schema);
});