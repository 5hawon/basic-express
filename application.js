const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.route('/about/mission').get((req,res)=>{
    res.render('pages/about', { message: 'Hello, World!' })
})



app.all('/', (req, res) => {
    res.send('this is home page');
});



app.listen(3000, () => {
    console.log('listening on port 3000');
});
