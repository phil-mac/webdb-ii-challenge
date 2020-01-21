const express = require('express')

const db = require('../../data/dbConfig');

const router = express.Router();

router.get('/', (req, res, next) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        next(err)

    })
})


router.post('/', (req, res, next) => {
    db('cars').insert(req.body)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCar => {
            res.json(newCar)
        })
    })
    .catch(err => {
        next(err)
    })
})

router.put('/:id', (req, res, next) => {
    db('cars').where({id: req.params.id}).update(req.body)
    .then(numUpdated => {
        db('cars').where({id: req.params.id})
        .then(updatedCar =>{
            res.json(updatedCar)
        })
    })
    .catch(err => {
        next(err)
    })
})

router.delete('/:id', (req, res, next) => {
    db('cars').where({id: req.params.id}).del()
    .then(() => {
        res.status(204).json({message: 'deleted'});
    })
    .catch(err => {
        next(err)
    })
})

router.use((err, req, res, next) => {
    console.log(err);
    res.json({message: "error!!!"})
})

module.exports = router;