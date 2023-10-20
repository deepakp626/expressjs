import express from 'express'      
import stu from '././routes/student.js';
import tea from '././routes/teacher.js';
const app = express();
const port = process.env.PORT || '3000'

// load router module
app.use('/student',stu);  // for student route
app.use('/teacher',tea); // for teacher route

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`)
})