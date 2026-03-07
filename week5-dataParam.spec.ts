import { test } from '@playwright/test';
import dotenv from 'dotenv'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import editData from '../../Helper/LT_LeadDetails.json'

dotenv.config({path:'Helper/LT_LoginProd.env'})

let url=process.env.LT_Url as string
let username=process.env.LT_Username as string
let password=process.env.LT_Password as string

const readValue=parse(fs.readFileSync('Helper/LT_LeadDetails.csv'),{
columns:true,
skip_empty_lines:true
})

for (let CreatLead of readValue){

test(`Create Data Param ${CreatLead.testID}`, async ({page}) => {
  await page.goto(url);
  await page.waitForTimeout(2000);
  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.locator(".decorativeSubmit").click();
  await page.locator("a:has-text('CRM/SFA')").click();
  await page.locator("a:has-text('Leads')").click();
  await page.getByText('Create Lead').click();
 // await page.locator('text=Create Lead').click();
  await page.locator("#createLeadForm_companyName").fill(CreatLead.companyName);
  await page.locator("#createLeadForm_firstName").fill(CreatLead.firstName);
  await page.locator("#createLeadForm_lastName").fill(CreatLead.lastName);
  await page.locator("#createLeadForm_personalTitle").fill("Mr.");
  await page.locator("#createLeadForm_annualRevenue").fill("1000000");
  await page.locator("#createLeadForm_departmentName").fill("IT");
  await page.locator("#createLeadForm_primaryPhoneNumber").fill("1234567890");
  await page.locator("input[value='Create Lead']").click();
  await page.waitForTimeout(2000);

})}

for (let EditLead of editData){

test(`Edit Data Param ${EditLead.testID}`, async ({page}) => {
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

})
};