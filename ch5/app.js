// Routing

// const express = require('express');
// ES6 syntax package.json ma type module lekhana hoga ES6 ka liya
import express from 'express'      

const app = express();
const port = process.env.PORT || '3000'

// Routes
app.get('/', (req, res)=> {
    res.end('GET Method')
})

// app.all('/sabkuch', (req, res)=> {
//     res.end('All method')
// })

// app.all('*', (req, res)=> {
//     res.end('Page not found !')
// })

// app.all('/api/*', (req, res)=> {
//     res.end('API page !')
// })

// String Path
// app.get('/about', (req, res)=> {
//     res.end('About Page')
// })
// app.get('/contact', (req, res)=> {
//     res.end('contact Page')
// })


// // String Pattern Path
// app.get('/ab?cd', (req, res)=> {
//     res.end('This route path will match acd and cbcd')
// })


// Regular Expression Path
// app.get(/a/, (req, res)=> {
//     res.end('this is a')
// })


// One Callback
// app.get('/cbexample1',(req,res)=>{
//     res.send("One CallBack example")
// })



// More than  One Callback
// app.get('/cbexample2',(req,res,next)=>{
//     console.log("First Callback")
//     next()
// },(req, res)=>{
//     console.log("Second Callback")
//     res.send("More than One CallBack example")
// })


// An array of callbacks
// const cb1 = (req, res,next) => {
//     console.log("first callback")
//     next()
// }
// const cb2 = (req, res, next)=>{
//     console.log("Second callback")
//     next()
// }
// const cb3 = (req, res)=>{
//     console.log("Third callback")
//     res.send("An Array of CallBack example")
// }
// app.get("/cbexample3",[cb1,cb2,cb3])

// combination od indenpendent function and array
// const cb1 = (req, res,next) => {
//     console.log("first callback")
//     next()
// }
// const cb2 = (req, res, next)=>{
//     console.log("Second callback")
//     next()
// }
// app.get("/cbexample4",[cb1,cb2],(req, res,)=>{
//     console.log("third callback")
//     res.send(" combination od indenpendent function and array")
// })


// // Chianed Route CallBack
// app.route('/student')
// .get((req, res)=>{
//     res.send("All Student")
// })
// .post((req, res)=>{
//     res.send("Add new Student")
// })
// .put((req, res)=>{
//     res.send("Update Student")
// })


app.route('/student')
.all((req, res,next)=>{
  console.log("First Run this foe all HTTP Method")
})
.get((req, res)=>{
    console.log("GET method")
    res.send("All Student")
})
.post((req, res)=>{
    console.log("Post method")
    res.send("Add new Student")
})
.put((req, res)=>{
    console.log("PUT method")
    res.send("Update Student")
})


app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})