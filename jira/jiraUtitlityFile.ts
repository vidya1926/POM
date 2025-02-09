//endpoint
//request body
//auth details

import axios from "axios"

const endpoint= "https://vidya-bharathi.atlassian.net/rest/api/2/issue"
//api credentials 
const username="vidyar1926@gmail.com"
//     password -
const apiKey ="ATATT3xFfGF0ygNVeFM-ygCuVWkDWED7SJddUC2fOKEwp2gJl-NlAUr-VaBZWu6IJM0kM0fD0JeT0ko4DdRG0dVsT2ajeewxT16O0XI4uQCnTqNAw-m5Gcf9zNw_IliHZtl0-ubZKIbroJ57eRPyjVx4ke0eHjJkO9RtvZ3gWU2ccQ_cuPjvoXo=23ED5124"
//project Id -->
const pID="PDEC"

export async function createIssue(summary:string,desc:string){
 //the payload
  const issuBody={
    "fields":{
        "project":{
            "key":pID
        },
        "summary":summary,
        "description":desc,
        // "priority":{
        //     "name":"High"
        // }
        "issuetype":{
            "name":"Bug"
        }
    }
  }

      const res=await axios.post(endpoint,issuBody,{
       headers:{
        "Content-Type":"application/json"
       },auth:{
           username: username,
           password: apiKey
       }
      }
    
    )
 
     
     console.log(res)
     return res.data.key
}


// createIssue("user name is field","Format issue")