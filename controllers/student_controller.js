const Student = require('../models/student');
const Interview = require('../models/interview');


module.exports.addStudent = function(req,res){
    if(req.cookies.user_id){
        return res.render('add_student', {
            title: 'Add Student',
        });
    } else {
        // return res.redirect('/users/sign-in');
    }
};

module.exports.createStudent = function (req, res) {
    Student.findOne({ email: req.body.email }, function (err, user) {
      if (err) {
        console.log("Cannot find the student");
        return res.redirect("back");
      }
  
      if (!user) {
        const dsa_score = req.body.dsa_score;
        const webD_score = req.body.webD_score;
        const react_score = req.body.react_score;
        if (
          dsa_score < 0 ||
          dsa_score > 100 ||
          webD_score > 100 ||
          webD_score < 0 ||
          react_score < 0 ||
          react_score > 100
        ) {
          return res.redirect("back");
        }
        Student.create(
          {
            name: req.body.name,
            email: req.body.email,
            batch: req.body.batch,
            status: req.body.status,
            dsa_score: req.body.dsa_score,
            webD_score: req.body.webD_score,
            react_score: req.body.react_score,
            // interviews: [
            //   {
            //     company: req.body.company,
            //     date: req.body.date,
            //     result: req.body.result,
            //   },
            // ],
          },
          function (err, user) {
            if (err) {
              console.log("student not added", err);
              return res.redirect("back");
            }
  
            return res.redirect("/users/profile");
          }
        );
      } else {
        console.log("student is already Added");
        return res.redirect("/users/profile");
      }
    });
  };
