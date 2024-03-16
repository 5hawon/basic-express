const express = require('express');
const path = require('path'); // Import the path module

const app = express();
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/about', (req, res) => {
    console.log(res.headersSent);
    res.render('pages/about',{
        name:'Bangladesh',
    });
    console.log(res.headersSent);
   
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
