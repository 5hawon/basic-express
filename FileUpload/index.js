const express = require('express');
const multer = require('multer');
const path = require('path');

const UPLOADS_FOLDER ='./uploads'

//define storage
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,UPLOADS_FOLDER);
    },
    filename: (req,file,cb)=>{
        const fileExt =path.extname(
            file.originalname
        );
        const fileName = file.originalname.replace(fileExt,"").toLowerCase().split(" ").join("-")+"-"+Date.now();
        cb(null, fileName+fileExt);

    },

})

var upload = multer ({
    storage : storage,
    limits:{
        fileSize: 1000000,

    },
    fileFilter: (req, file, cb) =>{
        console.log(file);
        if(file.mimetype === 'image/png'){
            cb(null, true);
        }
        else{
            cb(new Error('Only Png allowed'));
        }
    }


})

const app = express();

app.post('/', upload.single('file'), (req, res) => {
    res.send("Hello");
})

//default error handler
app.use((err,req,res,next)=>{
    if(err){
        if( err instanceof multer.MulterError){
            res.status(500).send('Error in uploading file');

        }
        else{
            res.status(500).send(err.message);

        }
        
    }
    else{
        res.send('Success!');
    }
    
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})