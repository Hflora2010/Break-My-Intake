const router = require('express').Router();
const { Food, User } = require('../models');
const withAuth = require ('../utils/auth');

// renders homepage route on nav to base localhost link 
router.get('/', async (req, res) => {
    // tries to render homepage handlebar, if unable to then throws an error 
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }

});

//renders the calculate bmi page 
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

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup');
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

        res.render('dashboard', { userResults });
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

        res.render('update-dashboard', { userResults });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/update-dashboard', withAuth, async (req,res)=> {

    try {
        const userData = await User.findByPk(req.session.user_id);

        if(!userData) {
            res.redirect('/login');
            return;
        }

        //serialize 
        await userData.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            weight: req.body.weight,
            height: req.body.height,
            goal: req.body.goal,
            activity_level: req.body.activity_level,

        });

            await userData.save();
            
            const newUserData = await User.findByPk(req.session.user_id);
            console.log(newUserData);

        res.render('dashboard', { newUserData });
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
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;