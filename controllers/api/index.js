const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const profileUpdateRoutes = require('./updateProfile');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/update-profile', profileUpdateRoutes);

module.exports = router;