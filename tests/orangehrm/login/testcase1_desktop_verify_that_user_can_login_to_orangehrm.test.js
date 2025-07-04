import { test, expect } from '@playwright/test';
import * as commonfunction from '../../pageobject/commonfunction.js';

test('Testcase01 - Desktop - Verify That User Can Login Successfully To Orange Hrm', async ({ page, context }) => 
  {
  //Launch the Orange Hrm Website
  await commonfunction.launchdesktoporagnehrm(page);
  
  //Get username label
  await commonfunction.getusernamelabel(page);

  //Get desktop username for login
  const desktopusername = await commonfunction.getusername();
  console.log("desktopusername is = " + desktopusername);

  //Get password label
  await commonfunction.getpasswordlabel(page);

  //Get desktop password for login
  const desktoppassword = await commonfunction.getpassword();
  console.log("desktoppassword is = " + desktoppassword);

  //Login to Orange Hrm Website
  await commonfunction.loginDesktop(page,desktopusername,desktoppassword);
    
});
