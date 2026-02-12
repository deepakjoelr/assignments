import { test, chromium, webkit } from '@playwright/test';

test("Launch Edge", async () => {
  const browser = await chromium.launch({channel: 'msedge'});
  const page = await browser.newPage();
  await page.goto('https://www.redbus.in/');
  await page.waitForTimeout(2000);

  const title = await page.title();
  const url = await page.url();

  console.log(`Title of the page is: ${title} / URL of the page is: ${url}`);
  
});


test("Launch Webkit", async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://www.flipkart.com/');
  await page.waitForTimeout(2000);

  const title = await page.title();
  const url = await page.url();

  console.log(`Title of the page is: ${title} / URL of the page is: ${url}`);
  
});