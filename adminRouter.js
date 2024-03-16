const express = require('express');

const adminRouter = express.Router();

const log = (req,res,next)=>{
    console.log('loggin something');
    next();
}

adminRouter.param('user',(req,res,next,id)=>{
    req.user = id=== '1' ? 'Admin' : 'Annonymous';
    next();
});


adminRouter.get('/:user',(req,res)=>{
    res.send('hello '+ req.user);
})

adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboadddrd');
})

module.exports = adminRouter;