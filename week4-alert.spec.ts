import {test} from '@playwright/test';

test ("alert in frame", async({page})=>{
    await page.goto ("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.on('dialog', async(alert)=>{
        console.log(alert.message());
        console.log(alert.type());
        await alert.accept();

    });
    const frame = page.frameLocator("#iframeResult");
    await frame.getByRole("button", { name: "Try it" }).click();

     console.log(await frame.locator("#demo").innerText());

});