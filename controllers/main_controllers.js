const Baseball = require('./models/seed.js');


//seed
router.get('/seed', (req, res) => {
    Baseball.create(seed, (err, data) => {
        res.redirect('/baseball')
    })
})

