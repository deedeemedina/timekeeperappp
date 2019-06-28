var router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send("pong");
  })

module.exports = router;