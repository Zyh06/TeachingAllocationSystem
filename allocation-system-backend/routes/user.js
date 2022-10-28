var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('user module');
});

router.post('/login', function (req, res, next) {
  const { email, password } = req.body;
  console.log('\nemail', email, '\npwd', password);
  req.db.from("coordinator").select("*")
    .where({ email: email, password: password })
    .then(users => {
      console.log("***** User check *****", users);
      //email not exists in db
      if (users.length === 0) {
        res.status(401).json({
          error: true,
          message: "Incorrect email or password"
        });
        return;
      } else {
        res.json({
          error: false,
          message: "Login successfully"
        });
      }
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
