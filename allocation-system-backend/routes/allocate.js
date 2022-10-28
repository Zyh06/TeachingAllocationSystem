var express = require('express');
var router = express.Router();

/* GET home page. */
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('alloocate module');
});


router.get('/projects', function (req, res, next) {
    var projectAllocatedIDList = [];
    console.log("**** projects without allocation ****");
    req.db.from("student").select("ProjectID").whereNotNull('ProjectID')
        .then(
            (rows) => {
                console.log("***** Teams query *****", rows);
                const results = rows.map(res => res.ProjectID);
                // Deletion of duplicated titles
                for (var i = 0; i < results.length; i++) {
                    if (projectAllocatedIDList.indexOf(results[i]) == -1) {
                        projectAllocatedIDList.push(results[i]);
                    }
                }
                console.log("\nprojects allocated ID: ", projectAllocatedIDList);
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
    req.db.from("project")
        .select("ID", "ProjectTitle")
        .then(projects => {
            console.log("***** Project query *****", projects.length);
            var projectsWithoutAllocation = [];
            for(var i=0; i<projects.length; i++){
                // not in allocated list
                if ( ! projectAllocatedIDList.includes(projects[i].ID) ){
                    projectsWithoutAllocation.push(projects[i]);
                }
            }
            res.json( projectsWithoutAllocation );

        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: true,
                message: "error in MySQL query",
                err: err
            });
            return;
        });
});

router.get('/teams', function (req, res, next) {
    console.log("**** teams without allocation ****");
    req.db.from("student").select("TeamName")
        .whereNull('ProjectID')
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

router.post('/allocate', function (req, res, next) {
    const { projectID, teamName } = req.body;
    console.log(
      '\nprojectID', projectID,
      '\nteamName', teamName
    );
    req.db.from("student").where("TeamName", "=", teamName).update({
        ProjectID: projectID,
    }).then(student => {
      console.log(`***** project ${projectID} team ${teamName} allocated *****`);
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


router.get('/allocation', function (req, res, next) {
    console.log("**** allocation ****");
    req.db.from("student").select("TeamName", "ProjectID").distinct("TeamName").whereNotNull('ProjectID')
        .then((rows) => {
            res.json(rows);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: true,
                message: "error in MySQL query",
                err: err
            });
            return;
        });

});


module.exports = router;