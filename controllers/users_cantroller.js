const User = require('../models/user');







// sign up page
module.exports.signUp = function (req, res) {
    // if (!req.cookies.user) {
      return res.render("user_sign_up", {
        title: "Authentication | Sign Up",
     });
    // } else {
    //   return res.redirect("/users/profile");
    //  }
};

// sign in page
module.exports.signIn = function (req, res) {
    // if (!req.cookies.user_id) {
      return res.render("user_sign_in", {
        title: "Authentication | Sign In",
      });
    // } else {
    //   return res.redirect("/users/profile");
    // }
};

