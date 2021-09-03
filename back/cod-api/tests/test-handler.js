"use strict";

const app = require("../app.js");
const configFile = require("../../environments.json");
const chai = require("chai");
const expect = chai.expect;
var event, context;

describe("Tests Call of Duty API Connection", function () {
  it("Verifies successful response", async () => {
    // TO-DO Find a workaround for importing env vars into mocha command
    // var auth = {
    //   username: configFile.CallOfDutyFunction.COD_USERNAME,
    //   password: configFile.CallOfDutyFunction.COD_PASSWORD,
    // };
    // const result = await app.codApiHandler(event, context);
    // expect(result).to.be.an("object");
    // expect(result.statusCode).to.equal(200);
    // let response = JSON.parse(result.body);
    // expect(response).to.be.an("object");
    // expect(response.message).to.be.equal("Success");
  });
});
