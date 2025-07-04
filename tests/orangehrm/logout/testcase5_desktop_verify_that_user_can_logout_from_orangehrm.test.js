import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase05 - Desktop - Verify That User Can Login Successfully To Orange Hrm', async ({ page, context }) => 
  {
  //Launch the Sauce Demo Website
  await commonfunction.launchdesktoporagnehrm(page);
  
  //Get desktop username for login
  const desktopusername = await commonfunction.getusername();
  console.log("desktopusername is = " + desktopusername);

  //Get desktop password for login
  const desktoppassword = await commonfunction.getpassword();
  console.log("desktoppassword is = " + desktoppassword);

  //Login to Sauce Demo Website
  await commonfunction.loginDesktop(page,desktopusername,desktoppassword);

  //Logout of the website
  await commonfunction.logoutDesktop(page);

  //Check Login Screen Is Displayed
  const logindesktoplabellocator = page.getByRole('heading', { name: 'Login' });
  const logindesktoplabel = await logindesktoplabellocator.textContent();
  console.log("Heading in Login Screen is = " + logindesktoplabel);   
});
