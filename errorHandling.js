const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(a);
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.send('erro');
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})