import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase01 - Mobile - Verify That User Can Login Successfully To Orange Hrm', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  const mobile = await commonfunction.launchmobileoragnehrm();

  //Get username label
  await commonfunction.getusernamelabel(mobile);
  
  //Get desktop username for login
  const mobileusername = await commonfunction.getusername();
  console.log("mobileusername is = " + mobileusername);
  
  //Get password label
  await commonfunction.getpasswordlabel(mobile);

  //Get desktop password for login
  const mobilepassword = await commonfunction.getpassword();
  console.log("mobilepassword is = " + mobilepassword);
  
  //Login to Sauce Demo Website
  await commonfunction.loginMobile(mobile,mobileusername,mobilepassword);
  await page.close();
  await mobile.bringToFront();
  });