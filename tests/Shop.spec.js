const {test}=require('@playwright/test');
const {expect}=require('@playwright/test');

test('Shop page',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByRole('link', { name: 'Shop' }).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole('button').click({timeout:20000});

});
