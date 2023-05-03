const router = require('express').Router();
const { User, Food } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req,res)=> {

    try {
        const userData = await User.findAll({
    
            user_id: req.session.user_id,
        });

        //serialize 
        const userResults = userData.map((data) => data.get({ plain: true}));

        res.render('dashboard', {
            userResults,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;