const { test } = require('@playwright/test');
const {expect}= require('@playwright/test');



test('test NH', async ({ page}) => {
    

    await page.goto("https://practicetestautomation.com/practice-test-login/");

    console.log(await page.title());
    await  expect(page).toHaveTitle("Test Login | Practice Test Automation");
    await page.locator("input#username").fill("student");
    await page.locator("input#password").fill("Password123");
    await page.locator("button#submit").click();

});

