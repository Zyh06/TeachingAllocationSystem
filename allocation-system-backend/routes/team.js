var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('team module');
});


router.post('/create', function (req, res, next) {
  const { studentID, familyName, givenName, title, email, gpa, perference, skills, teamName } = req.body;
  console.log(
    '\nstudentID', studentID,
    '\nfamilyName', familyName,
    '\ngivenName', givenName,
    '\ntitle', title,
    '\nemail', email,
    '\ngpa', gpa,
    '\nperference', perference,
    '\nskills', skills,
    '\nteamName', teamName
  );
  req.db.from("student").insert({
    StudentID: studentID,
    FamilyName: familyName,
    GivenName: givenName,
    Title: title,
    Email: email,
    Gpa: gpa,
    Perference: perference,
    Skills: skills,
    TeamName: teamName
  }).then(student => {
    console.log("***** Student insert to db *****", student);
    res.json({
      error: false,
      message: "Student create successfully"
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      error: true,
      message: "error in MySQL insert",
    });
    return;
  });
});

router.get('/list', function (req, res, next) {
  console.log("**** team list ****");
  req.db.from("student").select("TeamName")
    .then(
      (rows) => {
        console.log("***** Teams query *****", rows);
        const results = rows.map(res => res.TeamName);
        // Deletion of duplicated titles
        var teamList = [];
        for (var i = 0; i < results.length; i++) {
          if (teamList.indexOf(results[i]) == -1) {
            teamList.push(results[i]);
          }
        }
        res.json(teamList)
      }
    ).catch(err => {
      console.log(err);
      res.status(500).json({
        error: true,
        message: "error in MySQL query",
        err: err
      });
      return;
    });
});


router.get("/detail/:teamName", function (req, res, next) {
  if (!req.params.teamName) {  // no pramater
      res.status(400).json({
          error: true,
          message: "Invalid query parameters. Query parameters are not permitted."
      });
      return;
  } else {
      req.db.from('student').select("*")
          .where('TeamName', '=', req.params.teamName)
          .then((rows) => {
              res.json(rows)
          })
          .catch((err) => {
              res.status(400).json({
                  error: true,
                  message: "Invalid query parameters. Query parameters are not permitted.",
              });
              return;
          })
  }
});


module.exports = router;
