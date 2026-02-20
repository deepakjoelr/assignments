import { test, expect } from '@playwright/test';

test("Decathlon", async({page}) => {
  await page.goto('https://www.decathlon.in/');
  const pageTitle1 = await page.title();
  expect (pageTitle1).toBe("Buy Sporting Goods, Sportswear and Equipments | Download App");
  await page.getByRole('img').nth(2).click();
  const searchBar = page.locator('(//span[contains(text(),"Search for")])[1]');
  await expect(searchBar).toBeEnabled();
  await page.getByRole('textbox', { name: 'Search For 60+ Sports and 6000+ Products' }).fill('shoes');
  await page.getByRole('textbox', { name: 'Search For 60+ Sports and 6000+ Products' }).press('Enter')
  const pageTitle2 = await page.locator('title').innerText();
  console.log("the page title is", pageTitle2);
  expect (pageTitle2).toBe("Search | shoes");
  await page.locator('//span[contains(text(),"Men")]').click();
  await page.waitForTimeout(2000);
  await page.locator('//span[contains(text(),"Uk 10.5")]').click();
  await page.waitForTimeout(2000);
  await page.locator('(//span[contains(text(),"Running")])[3]').click();
  await page.locator('//span[contains(text(),"Most Relevant")]').click();
  await page.getByRole('link', {name : 'Price: Low to High'}).click();
  await page.locator('(//div[@class="swiper-wrapper"]/div/div/img)[1]').click();
  await page.getByText('UK 10.5 - EU 45').click();
  await page.getByRole('button', { name: 'addToCart' }).click();
  await expect(page.getByRole('heading', { name: 'Product added to cart' })).toContainText('Product added to cart'); 
  await page.getByRole('heading', { name: 'Product added to cart' }).click();
  await page.locator('//a[@aria-label="cart"]').click();
  const total = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]/p').innerText();
  console.log(total);
});