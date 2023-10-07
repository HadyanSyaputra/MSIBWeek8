const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/category', (request, response) => {
    pool.query('SELECT * FROM public.film_category', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

router.get('/category/id', (request, response) => {
    pool.query('SELECT * FROM public.film_category WHERE film_id = 1', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
});

module.exports = router;