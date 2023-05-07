const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/', withAuth, async (req, res) => {
    try {
        const userData = await User.update({ calorie_count: req.body.calorie_count }, {

            where: { id: req.session.user_id }
        })

        console.log(userData);

        res.status(200).json(userData);

    } catch (err) {
        res.status(400).json(err);
    }

});

module.exports = router;