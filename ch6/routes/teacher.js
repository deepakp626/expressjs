import express from 'express'

const router = express.Router()

// all teacher Routes
router.get("/all",(req,res)=>{
    res.send("All Teacher")
})


export default router