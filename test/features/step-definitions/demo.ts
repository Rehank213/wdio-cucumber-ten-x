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
  browser.pause(500000)
});

/**
 * Web Interactions
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("/inputs");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async function () {
  /**
   * Input box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field or just addvalue
   * 3. Click and type
   * 4. Slow typing
   */
  // let inputLink = await $('a[href="/inputs"]')
  // await inputLink.click()

  

  let searchField = await $('input')
  await searchField.addValue("12345")
  await browser.pause(5000)





});
