const router = require('express').Router();
const db = require("../../models");

router.route('/')
  .get(function (req, res) {
    db.User.findAll({
      include: [db.TimeEntry]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  })
  .post(function (req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  })

router.route('/:id')
  .get( (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.TimeEntry]
    }).then((dbUser) => {
      res.json(dbUser);
    });
  })
  .put((req, res) => {
    db.User.create(req.body).then((dbUser) => {
      res.json(dbUser);
    });
  })
  .delete((req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then((dbUser) => {
      res.json(dbUser);
    });
  })

module.exports = router;