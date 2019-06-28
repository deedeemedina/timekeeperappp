const router = require('express').Router();
const db = require("../../models");

router.route('/')
  .get(function (req, res) {
    db.TimeEntry.findAll({
      include: [db.User]
    }).then(function(dbTimeEntry) {
      res.json(dbTimeEntry);
    });
  })
  .post(function (req, res) {
    db.TimeEntry.create(req.body).then(function(dbTimeEntry) {
      res.json(dbTimeEntry);
    });
  })

router.route('/:id')
  .get( (req, res) => {
    db.TimeEntry.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbTimeEntry) {
      res.json(dbTimeEntry);
    });
  })
  .put((req, res) => {
    db.TimeEntry.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbTimeEntry) {
      res.json(dbTimeEntry);
    });
  })
  .delete((req, res) => {
    db.TimeEntry.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTimeEntry) {
      res.json(dbTimeEntry);
    });
  })

module.exports = router;