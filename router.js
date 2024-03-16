const express = require('express');
const adminRouter =require('./adminRouter');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to home');
})

app.get('/about',(req,res)=>{
    res.send('this is about');
})

app.use('/admin',adminRouter);
app.listen(3000,()=>{

    console.log('listening on port 3000');
})