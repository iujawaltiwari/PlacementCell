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



//Sign up data
module.exports.create = function (req, res) {
  // later for sign up
  if (req.body.password != req.body.confirm_password) {
    // req.flash("success", "Password and Confirm Password are not same");
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up");
      return;
    }
    if (!user) {
      // const secret = 'abcdefg';

      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        function (err, user) {
          if (err) {
            console.log("Error in finding user in signing up");
            return;
          }
          // req.flash("success", "Signed Up Successfully");
          return res.redirect("/users/sign-in");
        }
      );
    } else {
      // req.flash("error", "Sign Up Failed");
      return res.redirect("back");
    }
  });
};



// sign in data
module.exports.createSession = function (req, res) {
  // find the user
  // User.findOne({ email: req.body.email }, function (err, user) {
  //   //
  //   if (err) {
  //     console.log("Error in finding user in signing in");
  //     return;
  //   }
  //   // handle user found
  //   if (user) {
  //     // handle unmatched password
  //     if (user.password != req.body.password) {
  //       // user.validPassword(req.body.password)
  //       req.flash("error", "Wrong username or password");
  //       return res.redirect("back");
  //     }
  //     // handle session create
  //     res.cookie("user_id", user.id);
  //     req.flash("success", "Logged in successfully");
  //     return res.redirect("/users/profile");
  //   } else {
  //     // handle user not found
  //     req.flash("error", "Wrong username or password");
  //     console.log("Not signed in");
  //     return res.redirect("back");
  //   }
  // });
};

