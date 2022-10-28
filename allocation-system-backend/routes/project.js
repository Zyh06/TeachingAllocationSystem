var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('project module');
});


router.post('/create', function (req, res, next) {
    const { organizationName, projectTitle, deliverables, knowledgeSkills, projectDescription } = req.body;
    console.log(
        '\norganizationName', organizationName,
        '\nprojectTitle', projectTitle,
        '\ndeliverables', deliverables,
        '\nknowledgeSkills', knowledgeSkills,
        '\nprojectDescription', projectDescription,
    );
    req.db.from("project").insert({
        OrganizationName: organizationName,
        ProjectTitle: projectTitle,
        Deliverables: deliverables,
        KnowledgeSkill: knowledgeSkills,
        Description: projectDescription
    }).then(users => {
        console.log("***** Project insert to db *****", users);
        res.json({
            error: false,
            message: "Project create successfully"
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
    console.log("**** project list ****");
    req.db.from("project").select("*")
        .then(projects => {
            console.log("***** Project query *****", typeof (projects));
            res.json(projects);
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

router.get("/detail/:ProjectID", function (req, res, next) {
    if (!req.params.ProjectID) {  // no pramater
        res.status(400).json({
            error: true,
            message: "Invalid query parameters. Query parameters are not permitted."
        });
        return;
    } else {
        req.db.from('project').select("*")
            .where('id', '=', req.params.ProjectID)
            .then((rows) => {
                if (!rows[0]) {
                    res.status(404).json({
                        error: true,
                        message: `Project with ID: ${req.params.VolcanoID} not found.`
                    });
                    return;
                }
                res.json(rows[0])
            })
            .catch((err) => {
                res.status(400).json({
                    error: true,
                    message: "Invalid query parameters. Query parameters are not permitted."
                });
                return;
            })
    }
});



module.exports = router;
