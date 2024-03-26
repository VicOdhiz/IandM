import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.imbankgroup.com/ke/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('#menu-item-12094').getByRole('link', { name: 'Personal' }).click();
  await page.getByText('Business Business Accounts').click();
  await page.locator('#menu-item-12093').getByRole('link', { name: 'Diaspora' }).click();
  await page.locator('#menu-item-12100').getByRole('link', { name: 'About Us' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('#page-wrap-in').getByRole('link', { name: 'Cards' }).click();
  await page.getByRole('link', { name: 'Credit Cards', exact: true }).click();
  await page.getByRole('link', { name: 'I&M Visa International Gold' }).nth(1).click();
  await page.getByRole('button', { name: 'Want to make Payments for' }).click();
  await page.getByRole('button', { name: 'Terms and Conditions +' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Application Form' }).click();
  const page1 = await page1Promise;
  
});