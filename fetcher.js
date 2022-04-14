const request = require("request")
const fs = require('fs')
// const content = "Jeez, I sure am tired today."
const url = process.argv[2];
const path = process.argv[3];

const fetchWebsite = function (url, path){
  request(url, (error, response, body) =>{
    if(error) return console.log(`You got an error: ${error}`)
    if(response >200 && response < 500) return console.log(`Here's a response for you: ${response}`)
    fs.writeFile(path, body, error => {
      const byteSize = body.length;
      if(error){
        console.log(`You got an error: ${error}`);
        return
      }
      console.log(`You have successfully downloaded ${url} (${byteSize} bytes) to ${path}`)
  
    })
  
  })

}
fetchWebsite(url, path)

// request('http://www.nepallife.org', (error, response, body) =>{
//   fs.writeFile("./test.txt", body, error => {
//     if(error){
//       console.log(error);
//       return
//     }
//   })

// })