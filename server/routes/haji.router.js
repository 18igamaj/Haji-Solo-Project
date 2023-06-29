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
  let dataToInsert = req.body
  console.log('What is our req.body', dataToInsert)
  let sqlText = `INSERT INTO "hajj" ("name", "category_budget","amount_saved")
  VALUES ($1,$2,$3);`

  pool.query(sqlText,[dataToInsert.name,dataToInsert.category_budget,
    dataToInsert.amount_saved])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('Error SERVER POST===>', err)
      res.sendStatus(500)
    })
});

module.exports = router;
