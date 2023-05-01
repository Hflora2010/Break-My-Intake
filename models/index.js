const User = require('./User');
const Food = require('./Food');

User.hasMany(Food, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Food.belongsTo(User, {
    foreignKey: 'foodId',
});

module.exports = { User, Food };