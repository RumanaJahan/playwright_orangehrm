import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase06 - Mobile - Verify That User Can Login Successfully To Orange Hrm', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  await commonfunction.launchmobileorangehrm(page);
  
  //Get desktop username for login
  const mobileusername = await commonfunction.getusername();
  console.log("mobileusername is = " + mobileusername);

  //Get desktop password for login
  const mobilepassword = await commonfunction.getpassword();
  console.log("mobilepassword is = " + mobilepassword);

  //Login to Sauce Demo Website
  await commonfunction.loginMobile(page,mobileusername,mobilepassword);

  //Logout of the website
  await commonfunction.logoutMobile(page);

  //Check Login Screen Is Displayed
  const loginmobilelabellocator = page.getByRole('heading', { name: 'Login' });
  const loginmobilelabel = await loginmobilelabellocator.textContent();
  console.log("Heading in Login Screen is = " + loginmobilelabel);   
});
