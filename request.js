const express = require('express');

const app = express();

app.use(express.json());

const adminRoute = express.Router();
adminRoute.get('/dashboard',(req,res)=>{
    console.log(req.originalUrl);
    res.send('We are in admin mode');
})

app.use('/admin', adminRoute);

app.get('/user/:id',(req,res)=>{
    console.log(req.path);
    console.log(req.hostname);
    console.log(req.protocol);
    console.log(req.params.id);
    console.log(req.query);
    res.send('Welcome');
})
app.post('/user/',(req,res)=>{
    
    console.log(req.body);
    res.send('Welcome to Post');
})


app.listen(3000, () => {
    console.log('listening on port 3000');
});
