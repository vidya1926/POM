import {chromium, Page} from '@playwright/test'
import { Login } from './loginpage'

export class HomePage extends Login{
    readonly page:Page  //no data is assigned

   constructor(page:Page){
    super(page)
    this.page=page
   }
    
   async clickCRMSFA(){
    await this.page.click("//a[contains(text(),'CRM')]")   
}

async clickLogout(){
await this.page.locator("").click()
}
}

