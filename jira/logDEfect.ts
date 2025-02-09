import { TestInfo } from "@playwright/test";
import { createIssue } from "./jiraUtitlityFile";

export async function logDefect(testinfo:TestInfo){  
    const isNonBug=testinfo.annotations.some(annotation=>annotation.type=== 'Bug')
    if(testinfo.status==="timedOut" && !isNonBug|| testinfo.status=='failed' && !isNonBug){
    const summary=`The test ${testinfo.title} is failed`
    const desc= `The test failed due to  ${testinfo.error}`
   const key=   createIssue(summary,desc)
   return key;
}}


