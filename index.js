const express = require('express');


const app = express();
const port = process.env.PORT || 9000;


const db = require('./config/mongoose');






app.listen(port, function (err) {
    if (err) {
      console.log(`Error in running the server: ${err}`);
    }
    // console.log("gidbuhsbvufdhbvuffbsevyue", process.env);
    console.log(`Server is running on port: ${port}`);
  });