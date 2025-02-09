
import {test as baseTest} from '@playwright/test'
import { Login } from '../pages/loginpage'
import { HomePage } from '../pages/homepage'
import { urlConstants } from '../constants/urlCredentials'
import loginData from '../constants/login.json'
import { logDefect } from '../jira/logDEfect'


type myFxture={
    lp:Login
    hp:HomePage
}

export const test=baseTest.extend<myFxture>({
    lp: async({page},use)=>{
       const lp=new Login(page)
       await lp.loadurl(urlConstants.baseUrl)
       await lp.enterUsername(loginData[0].Username)
       await lp.enterPassword(loginData[1].Password)
       await lp.clickLogin()
       await lp.storageState()
        await use(lp)
    }
    ,hp: async({page},use)=>{
        const hp=new HomePage(page)
        await use(hp)
 
     }
})

let keyValue;
test.afterEach(``,async({},testInfo)=>{
    keyValue= await logDefect(testInfo)
})


test.afterAll(``,()=>{
     console.log("Attachment to the jira using " +keyValue)

      
})