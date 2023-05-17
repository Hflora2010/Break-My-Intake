const router = require('express').Router();
const { Food, User } = require('../models');
const withAuth = require ('../utils/auth');

// renders homepage route on nav to base localhost link 
router.get('/', async (req, res) => {
    // tries to render homepage handlebar, if unable to then throws an error 
    try {
        res.render('homepage', {logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }

});

//renders the calculate bmi page 
router.get('/calculatebmi', async (req, res) => {

    try {
        res.render('calculatebmi', {logged_in: req.session.logged_in});
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

    res.render('login', {logged_in: req.session.logged_in});
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup', {logged_in: req.session.logged_in});
});

router.get('/dashboard', withAuth, async (req,res)=> {

    try {
        const userData = await User.findByPk(req.session.user_id);

        if(!userData) {
            res.redirect('/login');
            return;
        }

        //serialize 
        const userResults = userData.get({ plain: true});
        const bmr = userData.calculateBMR();
        res.render('dashboard', { userResults, bmr: userData.calculateBMR(), 
                                    logged_in: req.session.logged_in });

    } catch (err) {
        res.status(400).json(err);
    }
});



router.get('/update-dashboard', withAuth, async (req,res)=> {

    try {
        const userData = await User.findByPk(req.session.user_id);

        if(!userData) {
            res.redirect('/login');
            return;
        }

        //serialize 
        const userResults = userData.get({ plain: true});

        res.render('update-dashboard', { userResults, logged_in: req.session.logged_in });
    } catch (err) {
        res.status(400).json(err);
    }
});



router.get('/food', withAuth, async (req, res) => {
    try {
        const foodData = await Food.findAll({

            user_id: req.session.user_id,
        });

        const foodResults = foodData.map((data) => data.get({ plain: true }));

        console.log(foodResults)
        res.render('food', {
            foodResults,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;