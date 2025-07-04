import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase06 - Mobile - Verify That User Can Logout Successfully From Orange Hrm', async ({ page, context }) => 
  {
 
  //Launch the Orange Hrm Website
  const mobile = await commonfunction.launchmobileoragnehrm();
  
  //Get desktop username for login
  const mobileusername = await commonfunction.getusername();
  console.log("mobileusername is = " + mobileusername);

  //Get mobile password for login
  const mobilepassword = await commonfunction.getpassword();
  console.log("mobilepassword is = " + mobilepassword);

  //Login to Orange Hrm Website
  await commonfunction.loginMobile(mobile,mobileusername,mobilepassword);
  await page.close();
  await mobile.bringToFront();

  //Logout of the website
  await commonfunction.logoutMobile(mobile);

  //Check Login Screen Is Displayed
  const loginMobilelabellocator = mobile.getByRole('heading', { name: 'Login' });
  const loginMobilelabel = await loginMobilelabellocator.textContent();
  console.log("Heading in Login Screen is = " + loginMobilelabel);   
});
