import { test } from "../customFixtures/fixtures"
import { createIssue } from "../jira/jiraUtitlityFile"



test(`Launch application through utility class`,async({lp})=>{
   
   console.log(await lp.verifyTitle())
  // createIssue("Learning API","Learning jira with API")
  })