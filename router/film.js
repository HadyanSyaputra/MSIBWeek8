const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/film', (request, response) => {
    pool.query('SELECT * FROM public.film', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

router.get('/film/id', (request, response) => {
    pool.query('SELECT * FROM public.film WHERE film_id = 23', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

module.exports = router;