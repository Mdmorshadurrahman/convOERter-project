const express = require('express');
const fs = require('fs');
const axios = require('axios').default;
const dotenv = require('dotenv');
dotenv.config();
const { body, validationResult } = require('express-validator');
const XAPILogBuilderService = require("../services/xapi-builder/xapi-builder.service");

const LRS_URL = process.env.LRS_URL;
//const LRS_URL = "https://lrs.elearn.rwth-aachen.de/data/xAPI/statements";
const LRS_AUTH_TOKEN = process.env.LRS_AUTH_TOKEN;
//const LRS_AUTH_TOKEN = "Basic YzIzMzkzNjRjYTQzN2I1MDVkNGM4NzFhMTJmMDdhOWJlMGYwZGY5ZjoxYzY0YzY0Zjk5MGU0ZDIxYWNjNmFmZjJlMTk3MjY1YjliZjEyMTU5";
const LRS_XAPI_VERSION = process.env.LRS_XAPI_VERSION;
//const LRS_XAPI_VERSION = "1.0.3";

const router = express.Router();

// endpoint to post logs from the convOERter tool
router.post('/', [
  // validate POST body
  body().isArray(),
  body('*.id')
    .exists().withMessage('id must exist').bail()
    .isString().withMessage('id must be a string').bail()
    .notEmpty().withMessage('id must not be empty').bail()
    .isUUID().withMessage('id must be an uuid4').bail(),
  body('*.timestamp')
    .exists().withMessage('timestamp must exist').bail()
    .isString().withMessage('timestamp must be a string').bail()
    .notEmpty().withMessage('timestamp must not be empty').bail()
    .isISO8601({ strict: true, strictSeparator: true }).withMessage('timestamp must be ISO string').bail(),
  body('*.action')
    .exists().withMessage('action must exist').bail()
    .isObject().withMessage('action must be an object').bail()
    .notEmpty().withMessage('action must not be empty').bail(),
  body('*.action.name')
    .exists().withMessage('action.name must exist').bail()
    .isString().withMessage('action.name must be a string').bail()
    .notEmpty().withMessage('action.name must not be empty').bail(),
  body('*.action.metadata')
    .optional()
    .isObject().withMessage('action.metadata must be a object').bail()
    .notEmpty().withMessage('action.metadata must not be empty').bail(),
  body('*.action.result')
    .optional()
    .isObject().withMessage('action.result must be a object').bail()
    .notEmpty().withMessage('action.result must not be empty').bail(),
  body('*.sessionId')
    .exists().withMessage('sessionId must exist').bail()
    .isString().withMessage('sessionId must be a string').bail()
    .notEmpty().withMessage('sessionId must not be empty').bail()
    .isUUID().withMessage('sessionId must be an uuid4').bail(),
  body('*.context')
    .optional()
    .isObject().withMessage('context must be an object').bail()
    .notEmpty().withMessage('context must not be empty').bail()
    .custom(innerBody => {
      if (innerBody !== undefined) {
        if (innerBody.toolVersion === undefined) {
          return Promise.reject('context.toolVersion must exist');
        }
        if (typeof innerBody.toolVersion !== "string") {
          return Promise.reject('context.toolVersion must be a string');
        }
        if (innerBody.toolVersion === "") {
          return Promise.reject('context.toolVersion must not be empty');
        }

        if (innerBody.toolLanguage === undefined) {
          return Promise.reject('context.toolLanguage must exist');
        }
        if (typeof innerBody.toolLanguage !== "string") {
          return Promise.reject('context.toolLanguage must be a string');
        }
        if (innerBody.toolLanguage === "") {
          return Promise.reject('context.toolLanguage must not be empty');
        }

        if (innerBody.country === undefined) {
          return Promise.reject('context.country must exist');
        }
        if (typeof innerBody.country !== "string") {
          return Promise.reject('context.country must be a string');
        }
        if (innerBody.country === "") {
          return Promise.reject('context.country must not be empty');
        }
      }
      return Promise.resolve();
    }),
], (req, res) => {
  // ensure the POST request has a valid model
  // finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // create xapi statement from each UI action and data
  const xAPIStatements = [];
  for (let i = 0; i < req.body.length; i++) {
    const xAPIStatement = XAPILogBuilderService.build(
      req.body[i].id,
      req.body[i].timestamp,
      req.body[i].sessionId,
      req.body[i].action,
      req.body[i].context ? {
        toolVersion: req.body[i].context.toolVersion,
        toolLanguage: req.body[i].context.toolLanguage,
        toolLanguage: req.body[i].context.toolLanguage,
        country: req.body[i].context.country,
        browserName: req.useragent.browser,
        browserVersion: req.useragent.version.split(".")[0],
      } : null
    );

    // add if its a valid UI action
    // if it's an invalid ui action, the XAPILogBuilderService would return null
    if (xAPIStatement) {
      xAPIStatements.push(xAPIStatement);
    }
  }

  // send the valid statements to LRS
  axios.post(LRS_URL, xAPIStatements, {
    headers: {
      "Authorization": LRS_AUTH_TOKEN,
      "X-Experience-API-Version": LRS_XAPI_VERSION,
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      console.log('error is:', res);
      return res.status(error.response.status).json(error.response.data);
    });

});


module.exports = router;
