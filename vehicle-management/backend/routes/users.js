var express = require('express');
var router = express.Router();
var User = require("../models/user.model")

const { body, validationResult } = require('express-validator');

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const user = await User.find().lean().exec();
  res.send(user);
});

router.post("/",
  body('username').not().isEmpty().withMessage("Feild can't be empty"),
  body('password').not().isEmpty().withMessage("Feild can't be empty").isLength({ min: 8 }).withMessage("Minimum Length is 8"),
  async function (req, res) {

    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = User.create(req.body);
      res.status(200).send('user created');
    } catch (error) {
      res.status(400).send(error);
    }

  });

module.exports = router;
