const User = require('../models/user');



module.exports.profile = function (req, res) {
  // if (req.cookies.user_id) {
    // User.findById(req.cookies.user_id, function (err, user) {
      // Student.find({}, function (err, students) {
        // interview.find({}, function (err, interviewfetch) {
          // if (err) {
            // console.log("cannot fetch interview", err);
          // }

          return res.render("user_profile", {
            title: "User Profile",
            // user: user,
            // students: students,
            // interviews: interviewfetch,
          });
        // });
      // });
    // });
  // } else {
  //   console.log("entered Headers");
  //   return res.redirect("/users/sign-in");
  // }
};



// sign up page
module.exports.signUp = function (req, res) {
    // if (!req.cookies.user) {
      return res.render("user_sign_up", {
        title: "Placement Cell | Sign Up",
     });
    // } else {
    //   return res.redirect("/users/profile");
    //  }
};

// sign in page
module.exports.signIn = function (req, res) {
    // if (!req.cookies.user_id) {
      return res.render("user_sign_in", {
        title: "Placement Cell | Sign In",
      });
    // } else {
    //   return res.redirect("/users/profile");
    // }
};


