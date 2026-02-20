import { test, chromium, expect } from '@playwright/test';

test("Create Lead Assert", async () => {
  const browser = await chromium.launch({channel: 'msedge'});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.waitForTimeout(2000);
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator("a:has-text('CRM/SFA')").click();
  await page.locator("a:has-text('Leads')").click();
  await page.getByText('Create Lead').click();
  await page.locator("#createLeadForm_companyName").fill("TestLeaf");
  await page.locator("#createLeadForm_firstName").fill("John");
  await page.locator("#createLeadForm_lastName").fill("Doe");
  await page.locator("#createLeadForm_personalTitle").fill("Mr.");
  await page.locator("#createLeadForm_annualRevenue").fill("1000000");
  await page.locator("#createLeadForm_departmentName").fill("IT");
  await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890");
  await page.locator("input[value='Create Lead']").click();
  await page.waitForTimeout(2000);
// Soft assertion (retrying) 
  await expect(page.locator('#viewLead_companyName_sp')).toContainText('TestLeaf'); 
  await expect(page.locator('#viewLead_firstName_sp')).toHaveText('John'); 
  await expect(page.locator('#viewLead_lastName_sp')).toHaveText('Doe');
  await expect(page.locator('#viewLead_statusId_sp')).toHaveText('Assigned');

// Hard assertion (non-retrying)
const companyName = await page.locator('#viewLead_companyName_sp').innerText();
expect(companyName).toContain('TestLeaf');

const firstName = await page.locator('#viewLead_firstName_sp').innerText();
expect(firstName).toBe('John');

const lastName = await page.locator('#viewLead_lastName_sp').innerText();
expect(lastName).toBe('Doe');

const status = await page.locator('#viewLead_statusId_sp').innerText();
expect(status).toBe('Assigned');

});



test.only("Edit Lead Assert", async () => {
  const browser = await chromium.launch({channel: 'msedge'});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.waitForTimeout(2000);
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[contains(text(),"Leads")]').click();
  await page.locator('//a[text()="Find Leads"]').click();
  await page.locator('(//input[@name="firstName"])[3]').fill('John'); 
  await page.locator('//button[text()="Find Leads"]').click();
  await page.locator('(//div[@class="x-grid3-cell-inner x-grid3-col-partyId"]/a)[1]').click(); 
  await page.locator('//a[text()="Edit"]').click();
  await page.locator("#updateLeadForm_companyName").fill("TestLeafNew");
  await page.locator("#updateLeadForm_annualRevenue").fill("10000");
  await page.locator("#updateLeadForm_departmentName").fill("Test");
  await page.locator("#updateLeadForm_description").fill("NA");
  await page.locator('//input[@value="Update"]').click();

  // Hard assertion (non-retrying)
const companyName = await page.locator('#viewLead_companyName_sp').innerText();
expect(companyName).toContain('TestLeafNew');

const firstName = await page.locator('#viewLead_annualRevenue_sp').innerText();
expect(firstName).toBe('$10,000.00');

const lastName = await page.locator('#viewLead_departmentName_sp').innerText();
expect(lastName).toBe('Test');

const status = await page.locator('#viewLead_description_sp').innerText();
expect(status).toBe('NA');

 
});