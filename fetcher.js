const request = require("request")
const fs = require('fs')
const content = "Jeez, I sure am tired today."

request('http://www.nepallife.org', (error, response, body) =>{
  fs.writeFile("./test.txt", body, error => {
    if(error){
      console.log(error);
      return
    }
  })

})