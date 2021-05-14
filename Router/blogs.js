const express = require('express')

const Router = express.Router();

Router.get('/blogs',(req,res)=>{
    res.send("blogs home page...")
})



module.exports = Router