
const express = require('express')
const mongoose = require('mongoose')
const hpp = require('hpp')
const cors = require('cors')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const rateLimit = require('express-rate-limit')
const path = require('path')
const router = require('./src/routes/api')
require('dotenv').config()
const app = new express()

//security implement

app.use(cors())
app.use(hpp())
app.use(helmet())
app.use(express.json({limit:'20MB'}))
app.use(express.urlencoded({extended:true}))
const limiter = rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)
app.use(cookieParser())


//mongoose Database connection 
let URI = "mongodb+srv://samad:<password>@cluster0.pq7y8jt.mongodb.net/CRUD6";
let OPTION = {user:"samad",pass:"samad1234",autoIndex:true}


mongoose.connect(URI,OPTION).then((res)=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})

app.set('etag',false)


app.use("/api",router)
app.use(express.static('client/dist'));


// Add React Front End Routing
app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})
module.exports=app