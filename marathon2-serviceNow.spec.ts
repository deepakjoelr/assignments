import { test, expect } from '@playwright/test';

test("Servicenow", async ({ page }) => {
    await page.goto('https://dev362917.service-now.com/navpage.do')
    await page.getByRole('textbox', { name: 'User name' }).fill('admin')
    await page.getByRole('textbox', { name: 'Password' }).fill('sm5NFtfI6A%!')
    await page.getByRole('button', { name: 'Log in' }).click()
    await page.getByRole('menuitem', { name: 'All' }).click()
    await page.getByText('Service Catalog').click();

    const frame = page.frameLocator("iframe");
    await frame.getByAltText('Mobiles').click()
    await frame.getByRole('heading', { name: 'Apple iPhone 13 pro' }).click()
    await frame.locator('label.radio-label', { hasText: 'Yes' }).click();
    await frame.getByRole('textbox', { name: 'What was the original phone number?' }).fill('99');
    await frame.locator('select.form-control.cat_item_option').selectOption('unlimited');
    await frame.locator('label.radio-label', { hasText: 'Sierra Blue' }).click();
    await frame.locator('label.radio-label', { hasText: '512 GB [add $300.00]' }).click();
    await frame.getByRole('button', { name: 'Order Now' }).click();
    
    await page.waitForTimeout(2000)
    await page.screenshot({ path: 'screenshots/evidence.png' })
    
    const confirmation = await frame.locator('div.notification.notification-success').innerText();
    expect(confirmation).toContain('Thank you, your request has been submitted');

})