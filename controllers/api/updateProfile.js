const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/', withAuth, async (req,res)=> {
console.log('this is the api route for update-profile')
    try {
        const userData = await User.update({
            sex: req.body.sex,
            age: req.body.age,
            weight: req.body.weight,
            height: req.body.height,
            goal: req.body.goal,
            activity_level: req.body.activity_level
        },
        {
            where: { id: req.session.user_id}
        });

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;