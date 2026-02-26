import { test, expect } from '@playwright/test';
import path from 'path'
import fs from 'fs'

test ("drag & drop upload", async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/upload');
    const event = page.waitForEvent('filechooser')
    page.locator("//div[@id='drag-drop-upload']").click();
    const uploadFile = await event
    await uploadFile.setFiles(path.join(__dirname, '../../data/tests.txt'))
    await page.waitForTimeout(5000)
    await expect(page.locator(`(//div[@class='dz-filename']/span)[1]`)).toHaveText(/tests.*/);
})

test.only ("download", async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/download');
    const event = page.waitForEvent('download')
    page.locator("//a[contains(text(), 'file.json')]").click();
    const downloadFile = await event
    await downloadFile.saveAs(path.join(__dirname,"../../data/",downloadFile.suggestedFilename()))
    expect(fs.existsSync(path.join(__dirname,"../../data/",downloadFile.suggestedFilename()))).toBeTruthy()
})