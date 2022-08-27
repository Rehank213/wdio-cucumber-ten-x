import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com/");
});
// When(/^Search with (.*)$/, async function (searchItem) {
When(/^Search with (.*)$/, async function (searchItem) {
  let elem = await $('[name="q"]');
  await elem.setValue(searchItem);
  await browser.keys("Enter");
});

Then(/^Click on the first search result$/, async function () {
  let elem = await $("h3");
  await elem.click();
});

Then(/^The URL should match (.*)$/, async function (expectedUrl) {
  let url = await browser.getUrl();
  chai.expect(url).that.equal(expectedUrl);
});
