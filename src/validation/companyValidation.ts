import { body, header, param } from "express-validator";

export const createCompanyValidator = [
  body("name")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo nome é obrigatorio."),
  body("email").isEmail(),
  body("company").isLength({ max: 50 }).optional({ nullable: true }),
  body("password")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo senha é obrigatorio."),
];
