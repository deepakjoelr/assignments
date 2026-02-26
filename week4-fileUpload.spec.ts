import { test, expect } from '@playwright/test';
import path from 'path'

test ("file upload salesforce", async ({page})=>{

    await page.goto('https://login.salesforce.com/');
    await page.locator('#username').fill('amazingfriends-e1s3@force.com');
    await page.locator('#password').fill('Salesforce@123');
    await page.locator('#Login').click();
    await page.waitForTimeout(35000); // To enter OTP manually
    await page.getByLabel('Main').getByRole('link', { name: 'Accounts' }).click();
    await page.getByRole('button',{name:'New'}).click();
    await page.getByRole('textbox',{name:'Account Name'}).fill('test');
    await page.getByRole('textbox',{name:'Website'}).fill('test');
    await page.getByRole('combobox', { name: 'Type' }).click();
    await page.getByText('Prospect').click();
    await page.getByRole('button', { name: 'Save', exact: true }).click();
    
    const uploadFiles = page.locator('//input[@type="file"]');
    const filepath = path.join(__dirname, '../../data/tests.txt')
    await uploadFiles.setInputFiles(filepath)
    await page.waitForTimeout(5000)
    await page.getByRole('button', { name: 'Done' }).click();
    await expect(page.locator(`//div[@aria-live='polite']/span`)).toHaveText(/tests.*/);

});