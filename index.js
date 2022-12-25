const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 9000;


const expressLayouts = require('express-ejs-layouts');

//Used for session cookie
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
const session = require("express-session");


const db = require('./config/mongoose');
const path = require('path')





app.use(express.urlencoded());


app.use(cookieParser());
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(expressLayouts);
app.use(express.static('./assets'));

//Use Express routers
app.use('/', require('./routes'));

//Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store the session cookie in the db
app.use(
  session({
    name: "authentication",
    // TODO change the secret before deployment in production mode
    // secret: env.session_cookies_key,
    secret: 'blahsmmm',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  //   store: new MongoStore(
  //     {
  //       mongooseConnection: 'mongodb://127.0.0.1:27017/PlacementCell',
  //       autoRemove: "disabled",
  //     },
  //     function (err) {
  //       console.log(err || "connect-mongodb setup ok");
  //     }
  //   ),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

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