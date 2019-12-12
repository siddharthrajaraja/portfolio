var express= require('express')
const app =express()
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
const path=require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var {home,particles}=require('./getroutes.js')

app.get('/',home);
app.get('/particles',particles);

app.listen(process.env.PORT || 1610)