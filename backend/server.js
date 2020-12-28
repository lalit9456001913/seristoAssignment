
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//database connection using mongoose library
var mongoose = require('mongoose');
const { constants } = require('buffer');
mongoose = require('mongoose')
mongoose.Promise = global.Promise
url = 'mongodb://localhost:27017/seristo';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
console.log('mongo has been connect')



//import contact schema
require('./scheema/contactScheema.js')
const Contact = mongoose.model('Contact')

//routes 

app.get('/ping',async(req,res)=>{
  
    res.status(200).send('got it');
})

app.post('/saveContacts/:email',async(req,res)=>{
    console.log(req.params.email)
    let email=req.params.email
    const len=req.body.length
    console.log(len)
    for(let i=0;i<len;i++){
        const obj=new Contact()
        obj.title=req.body[i].title
        obj.mobile=req.body[i].mobile
        obj.email=req.body[i].email
        obj.loggedInEmail=req.params.email
        obj.save((err) => {
            if (err) {
                sendStatus(401);
            } 
        });
    }
    let contacts = await Contact.find({'loggedInEmail':email})
    res.status(200).send({ "status": true, "code": 200,contacts})
})

app.get('/getContacts/:email',async(req,res)=>{
    console.log('inside getContact')
    let email=req.params.email
    console.log(email)
    let contacts = await Contact.find({'loggedInEmail':email})
    console.log(contacts)
    res.status(200).send({"contacts":contacts})
})

app.listen(process.env.PORT || 8000);

