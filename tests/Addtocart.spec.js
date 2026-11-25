
const { test, expect } = require('@playwright/test');

test('Add to cart flow', async ({ page }) => {
  const productName = 'End to End Playwright tutorials on JavaScript & TypeScript -UI Testing, API testing, AI Agents, MCP, Cucumber, CI/CD etc';

  await page.goto('https://courses.rahulshettyacademy.com/l/dashboard');
  await expect(page.locator('body')).toContainText('Dashboard');

  const productCard = page.locator('.card').filter({ hasText: productName }).first();
  await expect(productCard).toBeVisible({ timeout: 15000 });

  const addToCartButton = productCard.locator('button:has-text("Add to cart")').first();
  if (await addToCartButton.count()) {
    await addToCartButton.click();
    await expect(page.locator('text=Added to cart')).toBeVisible({ timeout: 10000 });
  }
});
