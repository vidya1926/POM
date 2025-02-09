import test, {chromium, Page} from '@playwright/test'
import { PlaywrightWrapper } from '../utiltiy/pwWrapper'
export class Login extends PlaywrightWrapper{
    readonly page:Page  //no data is assigned

   constructor(page:Page){
    super(page)
    this.page=page
   }

    public locators={
      username :"#username",
      password:"#password",
      loginButton:".decorativeSubmit",

      leads:{
         leadButton:"",
         firstnameLead:""
      },
      accounts:{

      }


    }

   
   async loadurl(url:string){
     await this.page.goto(url)
     await this.page.title()
   }

   async enterUsername(user:string){
    test.step(`Enter the ${user} in the username text box`,async()=>{ 
        await this.clearAndType(this.locators.username,"USername Textbox",user)
   }  )
  }
   async enterPassword(pwd:string){
    await this.page.locator("#password").fill(pwd)
    await this.clearAndType(this.locators.leads.firstnameLead,"","")
  }  
  async clickLogin(){
    await this.page.locator(".decorativeSubmit").click()
  }

  async storageState(){
    await this.page.context().storageState({path:"./constants/lfLogin.json"})
  }

  async verifyTitle(){
    return await this.page.title()
  }
}


// async function doLogin(){
//     const browser =await chromium.launch({headless:false})
//     const context=await browser.newContext()
//     const page=await context.newPage()
//     const launchap=new LaunchAPP(page)
//     launchap.loadurl()

// }

// doLogin()