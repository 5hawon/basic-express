//middleware is a function that have access to req res object and next function
//application level middleware
//router level middleware
//error level middleware
//built in middleware
//third party middleware

const express = require('express');

const app = express();
adminRouter = express.Router();
const myMiddleware = (req, res, next) => {
    console.log('i am logging');
    next();

}
adminRouter.use(myMiddleware);
adminRouter.get('/dashboard',(req,res)=>{
    res.send('Dashboard');
})



app.use('/admin',adminRouter);
app.get('/about',(req,res)=>{
    res.send('this is about page');

})


app.listen(3000,()=>{
    console.log('listening on port 3000');
});

