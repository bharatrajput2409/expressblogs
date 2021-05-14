const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParse = require('body-parser')
const port = process.env.PORT || 5000;

// app.use(cors({credentials:true,origin:true}))
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://bharat:bharat@1188@cluster0.rr7at.mongodb.net/expressdb',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    app.listen(port , ()=>{
        console.log(`server running on ${port}...`)
    })
})
.catch(err=>{
    console.log(err)
})
app.get('/',(req,res)=>{
    res.send('on home page...')
})
app.use('/',require('./Router/router'))