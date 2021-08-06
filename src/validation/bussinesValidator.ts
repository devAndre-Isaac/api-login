import { param, body } from "express-validator";

export const idValidator = [param("id").isUUID()];

export const createBussinesValidator = [
  body("corporate_name")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo nome é obrigatório."),
  body("image").isLength({ max: 50 }).not(),
  body("email").isEmail(),
  body("cnpj").isLength({ max: 50 }),
  body("password")
    .isLength({ max: 50 })
    .not()
    .notEmpty()
    .withMessage("O campo senha é obrigatório."),
];

export const updateBussinesValidator = idValidator.concat(createBussinesValidator);
