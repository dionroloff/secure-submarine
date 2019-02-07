const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        const queryText = `SELECT * FROM "secret"
                           WHERE "secrecy_level" < $1;`;
        pool.query(queryText, [req.user.clearance_level])
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error making SELECT for secrets:', error);
            res.sendStatus(500);
        });
        // res.send(req.user);
      } else {
        // They are not authenticated.
        res.sendStatus(403);
      }

    
});

router.get('/user', (req, res) => {

    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        const queryText = `SELECT "username" FROM "person";`;
        pool.query(queryText)
        .then(results => res.send(results.rows))
        .catch(error => {
            console.log('Error getting users:', error);
            res.sendStatus(500);
        });
        // res.send(req.user);
      } else {
        // They are not authenticated.
        res.sendStatus(403);
      }

    
});



module.exports = router;