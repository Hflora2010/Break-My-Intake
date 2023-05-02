const sequelize = require('../config/connection');
const { User, Food } = require('../models');

const userData = require('./userData.json');
const foodData = require('./foodData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true});
    
    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    //
    const foods = await Food.bulkCreate(foodData, {
        individualHooks: true,
        returning: true,
        
    });

    // Associating each food to a random user and 
    for (const food of foods) {
        await Food.create({
            ...food,
        });
        // const user = users[Math.floor(Math.random() * users.length)];
        // await food.setUser(user);
    }
};

seedDatabase();

