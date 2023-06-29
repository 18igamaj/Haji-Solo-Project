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
  // This Post is specific to name and budget 
  let sqlText = `INSERT INTO hajj ("name" ,"category_budget")
  VALUES ($1, $2);`;

  
  pool.query(sqlText, [req.body.name, req.body.category_budget])
    // console.log('What is our req.body', dataToInsert)
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('Error SERVER BUDGET POST===>', err)
      res.sendStatus(500)
    })
});

router.post('/', (req, res) => {
  // This Post is specific to update our savings Column
 
  let sqlText = `INSERT INTO hajj ("amount_saved")
  VALUES ($1);`;

  
  pool.query(sqlText, [ req.body.amount_saved])
   
    .then(result => {
      res.sendStatus(201)
    })
    .catch(err => {
      console.log('Error SERVER SAVING POST===>', err)
      res.sendStatus(500)
    })
});

module.exports = router;
