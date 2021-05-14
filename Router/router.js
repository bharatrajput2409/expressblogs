const express = require('express')

const Router = express.Router();

Router.use('/api',require('./blogs'))
Router.get('/',(req,res)=>{
    res.send('on home page')
})

module.exports = Router;