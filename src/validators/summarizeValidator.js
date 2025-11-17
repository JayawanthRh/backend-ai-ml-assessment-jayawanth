import { body } from "express-validator";

export const summarizeSchema = [
  body("text")
    .exists({ checkFalsy: true }).withMessage("text is required")
    .isString().withMessage("text must be a string")
    .isLength({ min: 1 }).withMessage("text cannot be empty"),
];
