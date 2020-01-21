const express = require('express')

const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({server: "is working"})
})

module.exports = router;