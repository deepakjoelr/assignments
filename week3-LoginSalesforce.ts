import { chromium } from '@playwright/test';

async function loginSalesforce() {
    const browser = await chromium.launch({ channel: 'chrome', headless: false });
    const page = await browser.newPage();
    await page.goto('https://energy-force-332.my.salesforce.com/');
    await page.locator('#username').fill('amazingfriends-e1s3@force.com');
    await page.locator('#password').fill('Xxx@123');
    await page.locator('#Login').click();
    await page.waitForTimeout(30000); // To enter OTP manually
    const title = await page.title();
    const url = page.url();
    console.log(`Title of the page is: ${title} / URL of the page is: ${url}`);
    await browser.close();
}

loginSalesforce();

