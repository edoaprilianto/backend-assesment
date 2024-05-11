const { body } = require("express-validator");

const FormValidationRules = () => {
  return [

    body("name")
      .notEmpty()
      .matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),

    body("email")
      .notEmpty()
      .isEmail().withMessage('Email is invalid.'),

    body("phone_number")
      .notEmpty()
      .isNumeric().withMessage('Phone Number only number.'),

    body("date_of_born")
      .notEmpty(),

    body("place_of_born")
      .notEmpty(),

    body("sex")
      .notEmpty(),

  ];
};

module.exports = {
    FormValidationRules,
};