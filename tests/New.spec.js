const { test, expect } = require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
  const email = 'anshika@gmail.com';

  await page.goto('https://rahulshettyacademy.com/client');
  await expect(page.locator('#userEmail')).toBeVisible();

  await page.locator('#userEmail').fill(email);
  await page.locator('#userPassword').fill('Iamking@000');
  await page.locator("input[value='Login']").click();

  await page.waitForLoadState('networkidle');
  await expect(page.locator('text=Products')).toBeVisible({ timeout: 20000 });
});