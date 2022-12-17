const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 9000;

const expressLayouts = require('express-ejs-layouts');

const session = require("express-session");


const db = require('./config/mongoose');
const path = require('path')




//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded());


app.use(cookieParser());
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(expressLayouts);
app.use(express.static('./assets'));

//Use Express routers
app.use('/', require('./routes'));



// app.get('/', function(req,res){
//   res.send('<h1>Cool Go</h1>');
// })
app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    // console.log("gidbuhsbvufdhbvuffbsevyue", process.env);
    console.log(`Server is running on port: ${port}`);
  });