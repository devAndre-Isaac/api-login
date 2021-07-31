import { param, body } from "express-validator";

export const idValidator = [param("id").isUUID()];

export const createUserValidator = [
  body("name")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo nome é obrigatório."),
  body("email").isEmail(),
  body("company").isLength({ max: 50 }).optional({ nullable: true }),
  body("password")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo senha é obrigatório."),
];

export const updateUserValidator = idValidator.concat(createUserValidator);
