const router = require('express').Router();
const { Project, User } = require('../models');


router.get('/', async (req, res) => {
    // tries to render homepage handlebar, if unable to then throws an error 
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/calculatebmi', async (req, res) => {

    try {
        res.render('calculatebmi');
    } catch (err) {
        res.status(500).json(err);
    }

});

// Commenting this code to move functionality to public/js file to render page after POST
// router.get('/result', async (req, res) => {

//     try {
//         res.render('bmiresult');
//     } catch (err) {
//         res.status(500).json(err);
//     }

// });

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

module.exports = router;