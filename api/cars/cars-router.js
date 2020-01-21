const express = require('express')

const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        console.log(err);
        res.json({message: "error!!!"})
    })
})


router.post('/', (req, res) => {
    db('cars').insert(req.body)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCar => {
            res.json(newCar)
        })
    })
    .catch(err => {
        console.log(err);
        res.json({message: "error!!!"})
    })
})

module.exports = router;