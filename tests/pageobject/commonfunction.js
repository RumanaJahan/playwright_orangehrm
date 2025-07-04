// This file contains pre-written test actions which can be reused on multiple test cases
//--------------------------------------------------------------------------------------------------------------------------
import { expect, devices, chromium } from '@playwright/test';

 //--------------------------------------------------------------------------------------------------------------------------
 //LAUNCH SPECIFIC PAGES
 //--------------------------------------------------------------------------------------------------------------------------

 export async function launchdesktoporagnehrm(page) 
 {
   const nav = await page.goto('/');
   const desktopurl = page.url();
   await expect(page).toHaveURL(desktopurl);
   console.log('Current url is:', desktopurl);
   await page.setViewportSize({ width: 1920, height: 1080 });
 }

 export async function launchmobileoragnehrm() 
 {
   const browser = await chromium.launch();
   const context = await browser.newContext({ ...devices['iPhone X'] });
   const mobile = await context.newPage();
   await mobile.goto('/');
   const mobileurl = mobile.url();
   await expect(mobile).toHaveURL(mobileurl);
   console.log('Current url is:', mobileurl);
   await mobile.setViewportSize({ width: 450, height: 1070});
   return mobile;
 }

// Get the username label

export async function getusernamelabel(page) 
{
  const usernamelabelLocator = page.getByText('Username', { exact: true });
  const usernamelabel = await usernamelabelLocator.textContent();
  console.log("usernamelabel is = " + usernamelabel);
}


//Get the username
export async function getusername() 
{
 return 'Admin';
}

//Get the password label
export async function getpasswordlabel(page) 
{
  const passwordlabelLocator = page.getByText('Password', { exact: true });
  const passwordlabel = await passwordlabelLocator.textContent();
  console.log("passwordlabel is = " + passwordlabel);
}

//Get the password
 export async function getpassword() 
 {
   return 'admin123';
 }

export async function loginDesktop(page,desktopusername,desktoppassword ) 
 {
   //Enter the username
   const desktopusernamefield = await page.locator('//*[@name="username"]');
   //const desktopusernamefield = await page.getByRole('textbox', { name: 'Username' });
   await expect(desktopusernamefield).toBeVisible();
   await desktopusernamefield.fill(desktopusername);

   //Enter the password
   const desktoppasswordfield = await page.locator('//*[@name="password"]');
   //const desktoppasswordfield = await page.getByRole('textbox', { name: 'Password' });
   await expect(desktoppasswordfield).toBeVisible();
   await desktoppasswordfield.fill(desktoppassword);

   //Click the login button
   //const desktoploginbutton = await page.locator('//*[@type="submit"]');
   const desktoploginbutton = await page.getByRole('button', { name: 'Login' });
   await desktoploginbutton.click();
   
   //Validation after login
   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
 }

 export async function loginMobile(page,mobileusername,mobilepassword ) 
 {
   //Enter the username
   const mobileusernamefield = await page.locator('//*[@name="username"]');
   //const mobileusernamefield = await page.getByRole('textbox', { name: 'Username' });
   await expect(mobileusernamefield).toBeVisible();
   await mobileusernamefield.fill(mobileusername);

   //Enter the password
   const mobilepasswordfield = await page.locator('//*[@name="password"]');
   //const mobilepasswordfield = await page.getByRole('textbox', { name: 'Password' });
   await expect(mobilepasswordfield).toBeVisible();
   await mobilepasswordfield.fill(mobilepassword);

   //Click the login button
   //const mobileloginbutton = await page.locator('//*[@type="submit"]');
   const mobileloginbutton = await page.getByRole('button', { name: 'Login' });
   await mobileloginbutton.click();
   
   //Validation after login
   await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  
 }

 export async function logoutDesktop(page)
 {
   await page.getByAltText('profile picture').click();
   await page.getByRole('menuitem', { name: 'Logout' }).click();
 }