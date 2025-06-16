import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase01 - Desktop - Verify That Error Displayed When User Enters Empty Credentials', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  await commonfunction.launchdesktoporagnehrm(page);

  //Click Login Without Any Credentials Added
  const loginbutton = await page.getByRole('button', { name: 'Login' });
  await loginbutton.click();
  const loginusernamerequirefielderror = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span');
  await expect(loginusernamerequirefielderror).toBeVisible();
  const loginpasswordrequiredfielderror = page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span'); 
  await expect(loginpasswordrequiredfielderror).toBeVisible();
 });
