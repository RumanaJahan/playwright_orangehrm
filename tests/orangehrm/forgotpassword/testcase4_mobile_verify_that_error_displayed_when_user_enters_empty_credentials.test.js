import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase04 - Mobile - Verify That Error Displayed When User Enters Empty Credentials', async ({ page, context }) => 
  {
   //Launch the Orange Hrm Website
   const mobile = await commonfunction.launchmobileoragnehrm();

   //Click Login Without Any Credentials Added
   const loginbutton = await mobile.getByRole('button', { name: 'Login' });
   await loginbutton.click();
   const loginusernamerequirefielderror = mobile.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/span');
   await expect(loginusernamerequirefielderror).toBeVisible();
   const loginpasswordrequiredfielderror = mobile.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/span'); 
   await expect(loginpasswordrequiredfielderror).toBeVisible();
 });
