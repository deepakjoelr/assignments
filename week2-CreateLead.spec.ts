import { test, chromium } from '@playwright/test';

test("Create Lead", async () => {
  const browser = await chromium.launch({channel: 'msedge'});
  const page = await browser.newPage();
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.waitForTimeout(2000);
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.waitForTimeout(2000); 
  await page.locator("a:has-text('CRM/SFA')").click();
  await page.waitForTimeout(2000);
  await page.locator("a:has-text('Leads')").click();
  await page.waitForTimeout(2000);
    await page.locator(".x-panel-header-text").nth(4).click();
    await page.locator(".x-form-element  input").nth(16).fill("Testleaf");
    await page.locator(".x-form-element  input").nth(17).fill("John");
    await page.locator(".x-form-element  input").nth(18).fill("Doe");
    await page.locator(".x-form-element  input").nth(19).fill("91");
    await page.locator(".x-form-element  input").nth(21).fill("9999999999");
    await page.locator(".x-form-element  input").nth(22).fill("Johndoe@yopmail.com");
    await page.locator(".x-btn-center").nth(4).click();
});