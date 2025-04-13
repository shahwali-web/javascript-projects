// const fs = require("fs")

// fs.writeFileSync("test.txt","this is text Updated", 'utf-8')
// fs.appendFileSync("test.txt","\nThis text come from Append")
// const a = fs.readFileSync("test.txt","utf-8")

// for(let i =0; i <5; i++){
    
//     fs.appendFileSync("test.txt","\nThis is Append In side for Loop ")
// }
import readline from 'readline'
import fs from 'fs'


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// r1.question("Enter your name ", function(name){
//     console.log("Your name is : ", name)
//     const final_value = `My Name is ${name}`
//     fs.appendFileSync("test.txt", `\n${final_value}`)
//     r1.close();
// })

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
// user_text = question("Enter Your Text here: ", function(userText){
//     fs.writeFileSync("")
// })