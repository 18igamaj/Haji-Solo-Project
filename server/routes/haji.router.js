const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code for to pull data from haji_database
  pool.query(`SELECT * FROM "hajj";`)

  .then(result => {
    console.log('Whats coming from database?', result.rows)
    res.send(result.rows)
  })
  .catch(err => {
    console.log('Error with Server GET', err)
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
