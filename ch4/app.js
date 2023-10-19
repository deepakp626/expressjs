// First Express JS Application

// const express = require('express');
import express from 'express'
const app = express();
const port = process.env.PORT || '3000'

app.get('/', (req, res)=> {
    res.end('hello world ES6')
})

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})