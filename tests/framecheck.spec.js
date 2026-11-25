test('practice', async ({ page }) => {
    const Productname="ZARA COAT 3";
  test.setTimeout(70000);
  page.setDefaultTimeout(10000);

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
  const Framepage=await page.frameLocator('#courses-iframe');
  Framepage.locator("a[href*='Learning paths']").click();

