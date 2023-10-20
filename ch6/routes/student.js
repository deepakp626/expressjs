import express from 'express'

const router = express.Router()


router.get("/all",(req,res)=>{
    res.send("All student")
})


export default router