import { test } from "../customFixtures/fixtures"
import fs from 'fs'
import path from 'path'
import { urlConstants } from "../constants/urlCredentials"
import { logDefect } from "../jira/logDEfect"
let loginInfo:any[]

test.beforeEach(`Read data for creating the lead`,async()=>{
       loginInfo=JSON.parse(fs.readFileSync(path.join(__dirname, "../constants/login.json"),'utf-8'))

})

test.use({storageState:"./constants/lfLogin.json"})
test(`Verify the lead`,async({hp},testInfo)=>{
       test.info().annotations.push({
              type:"Bug",description:"" })
    await hp.loadurl(urlConstants.homePageUrl)
    await hp.clickCRMSFA()
    console.log( await hp.verifyTitle())    
 })
