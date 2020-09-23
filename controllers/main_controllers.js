const express = require('express');
const Baseball = require('../models/schema.js');
const baseballSeeds = require('../models/seed.js');
const baseballs = express.Router()

module.exports = baseballs;

// =======================================
//              ROUTES
// =======================================

/* ===============
POST ROUTE - SEED
================== */
//SEED
// baseballs.get('/seed', (req, res) => {
//     Baseball.create(baseballSeeds,
//         (err, data) => {
//             // console.log(data);
//             res.redirect('/baseballs')
//         })
// })


/* ===========
DELETE ROUTE
============= */
//DELETE
baseballs.delete('/:id', (req, res) => {
    Baseball.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/baseballs')
    })
})

/* ===========
PUT ROUTE
============= */
//UPDATE
baseballs.put('/:id', (req, res) => {
    Baseball.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        },
        (err, updatedModel) => {
            res.redirect('/baseballs')
        }
    )
})

/* ===========
GET ROUTE
============= */
//NEW
baseballs.get('/:id/new', (req, res) => {
    res.render('new.ejs')
})

/* ===========
GET ROUTE
============= */
//EDIT
baseballs.get('/:id/edit', (req, res) => {
    Baseball.findById(req.params.id, (error, foundBaseball) => {
        // console.log(foundBaseball);
        res.render('edit.ejs', {
            baseball: foundBaseball
        })
    })
})

/* ===========
GET ROUTE
============= */
//SHOW
baseballs.get('/:id', (req, res) => {
    Baseball.findById(req.params.id, (error, foundBaseball) => {
        // console.log(foundBaseball);
        res.render('show.ejs', {
            baseball: foundBaseball
        })
    })
})

/* ===========
GET ROUTE
============= */
// INDEX
baseballs.get('/', (req, res) => {
    Baseball.find({}, (error, allbaseballs) => {
        // console.log(allbaseballs);
        res.render('index.ejs', {
            baseballs: allbaseballs
        })
    })
})

/* ===========
GET ROUTE
============= */
//LANDING
baseballs.get('/:id/landing', (req, res) => {
    res.render('landing.ejs')
})

// baseballs.get('/baseballs/landing', (req, res) => {
//     Baseball.find({}, (error, allbaseballz) => {
//         console.log(allbaseballs);
//         res.render('landing.ejs', {
//             baseballz: allbaseballz
//         })
//     })
// })

/* ===========
POST ROUTE
============= */
//CREATE
baseballs.post('/', (req, res) => {
    Baseball.create(req.body, (error, createdBaseball) => {
        res.redirect('/baseballs')
    })
})
