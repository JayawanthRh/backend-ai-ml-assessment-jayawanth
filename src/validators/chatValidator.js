import { body } from "express-validator";

export const chatSchema = [
  body("messages")
    .exists({ checkNull: true }).withMessage("messages is required")
    .isArray().withMessage("messages must be an array"),

  body("messages.*.role")
    .exists({ checkFalsy: true }).withMessage("role is required for each message")
    .isString().withMessage("role must be a string")
    .isIn(["user", "assistant", "system"])
    .withMessage("role must be one of: user, assistant, system"),

  body("messages.*.content")
    .exists({ checkFalsy: true }).withMessage("content is required for each message")
    .isString().withMessage("content must be a string"),
];
