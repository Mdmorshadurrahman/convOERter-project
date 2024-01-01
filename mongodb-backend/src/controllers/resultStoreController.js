const express = require('express');
const axios = require('axios').default;
const dotenv = require('dotenv');
dotenv.config();


const RESULT_STORE_URL = process.env.RESULT_STORE_URL
const RESULT_STORE_AUTH_TOKEN = process.env.RESULT_STORE_AUTH_TOKEN

const router = express.Router();

router.get('/*', (req, res) => {
  // Get path of the result store API to access
  const resStorePath = req.url;
  if (resStorePath === '') {
    // If no path is provided, return an error message
    res.status(400).send('Please provide a path of the result store api to access.');
    return;
  }

  // get analytics data from result store
  axios.get(RESULT_STORE_URL + resStorePath, {
    headers: {
      "Authorization": RESULT_STORE_AUTH_TOKEN,
      "Content-Type": "application/json; charset=utf-8"
    }
  })
    .then((response) => {
      return res.status(response.status).json(response.data);
    })
    .catch((error) => {
      console.log(JSON.stringify(error));
      if (error.response) {
        return res.status(error.response.status).json(error.response.data);
      } else {
        return res.status(500).json({ message: 'Internal server error', resStorePath, error });
      }
    });

});

module.exports = router;
