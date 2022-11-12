const mongoose=require('mongoose');

const URL= `mongodb+srv://tamim:tamim8210@cluster0.ylwaj.mongodb.net/pos-db`;

mongoose.connect(URL)

let connectionObj=mongoose.connection

connectionObj.on('connected', ()=>{
    console.log("connection Success")
})
connectionObj.on('error', ()=>{
    console.log("connection Failed")
})