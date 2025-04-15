
import readline from 'readline'
import fs from 'fs'


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



r1.question("Enter Your File name: ", function(fileName){
    r1.question("Enter Your Text here", function(userText){
        fs.writeFile(`${fileName}.txt`, userText,(err)=>{
            if(err){
                console.log("You File is Not Created! This Error Occur", err)
            }else{
                console.log("Your File is Successfully Created! ")
            }r1.close();
        })
        
    })
   
})
