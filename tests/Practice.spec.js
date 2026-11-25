const { test, expect } = require('@playwright/test');

test('practice', async ({ page }) => {
    const Productname="ZARA COAT 3";
  test.setTimeout(70000);
  page.setDefaultTimeout(10000);

  await page.goto(' ');
  await page.getByPlaceholder('email@example.com').fill('jmausami@gmail.com');
  await page.getByPlaceholder('enter your passsword').fill('Ilrenu@358');
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Automation Practice')).toBeVisible({ timeout: 70000 });
  await page.locator(".card-body").filter({ hasText: 'ZARA COAT 3' }).getByRole('button', { name: 'Add To Cart' }).click();
  await page.getByRole('listitem').getByRole('button', { name: 'Cart' }).click();
await expect(page.locator(".cartSection h3:has-text('ZARA COAT 3')")).toBeVisible({ timeout: 70000 });
await page.locator("div li").first().waitFor();
await expect(page.getByText('ZARA COAT 3')).toBeVisible();
await page.getByRole('button', { name: 'Checkout' }).click();
await page.getByPlaceholder('Select Country').pressSequentially('Ind');
await page.getByRole('button', { name: 'India' }).nth(1).click();
await page.getByText('Place Order').click();
await expect(page.getByText('Thankyou for the order.')).toBeVisible();


});