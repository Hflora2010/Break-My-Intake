const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Food extends Model { }

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        calories: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        serving_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quanity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "food",
    }
);

module.exports = Food;