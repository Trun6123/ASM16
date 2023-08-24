var express = require('express');
const FlycamModel = require('../models/FlycamModel');
var router = express.Router();

router.get('/', async(req, res) => {
    var flycams = await FlycamModel.find();
    res.render('flycam/flycamList', { flycams: flycams });
});
router.get('/delete/:id', async(req, res) => {
    await FlycamModel.findByIdAndDelete(req.params.id);
    res.redirect('/flycam');
});
router.get('/add', (req, res) => {
    res.render('flycam/flycamAdd');
});

router.post('/add', async(req, res) => {
    var flycam = req.body;
    await FlycamModel.create(flycam)
        .then(console.log('Add new flycam successfully !'))
        .catch(err => console.log(err));
    res.redirect('/flycam');
});
module.exports = router;