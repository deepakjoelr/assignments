import { test, expect } from '@playwright/test';

test("PVR", async({page}) => {
  await page.goto('https://www.pvrcinemas.com/');
  await page.getByRole('combobox', { name: 'Cities' }).fill('chennai');
  await page.getByRole('combobox', { name: 'Cities' }).press('Enter');
  await page.getByRole('heading',{ name: 'Chennai'}).click();
  await page.locator('//span[text()="Cinema"]').click();
  await page.getByRole('button', {name: 'Select Cinema'}).click();
  await page.getByText('INOX National,Virugambakkam').click();
  await page.getByText('Tomorrow, 21 Feb').click();
  await page.locator('//li[@class="p-dropdown-item"]/span[text()="MY DEAR DOLLY"]').click();
  await page.getByText('04:15 PM').click();
  await page.getByRole('button', {name: 'Submit'}).click();
  await page.getByRole('button', {name: 'Accept'}).click();
  await page.locator('//span[@id="SL.SILVER|B:1"]').click();
  const seatInfo = await page.locator('.seat-info').innerText();
  expect(seatInfo).toContain('B1');
  const price = await page.locator('.grand-amount').innerText();
  expect(price).toContain('218.02');
  const pageTitle = await page.title();
  expect(pageTitle).toBe("PVR Cinemas");
  await page.getByRole('button', {name: 'Proceed'}).click();
});