const { validationResult } = require("express-validator");

exports.create = function(req, res) {
    const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
      }

      res.send(req.body)

};