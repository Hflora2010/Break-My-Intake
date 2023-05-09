const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
  //bmr calculator for male and female sex
  calculateBMR() {
    let bmr = 0;
    const weight = this.weight * 0.453592; // convert lbs to kg
    const height = this.height * 2.54; // convert inches to cm
    const age = this.age;
    const activityLevel = this.activity_level;
    
    if (this.sex === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (this.sex === "female") {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    switch (activityLevel) {
      case "sedentary":
        bmr *= 1.2;
        break;
      case "lightly active":
        bmr *= 1.375;
        break;
      case "moderately active":
        bmr *= 1.55;
        break;
      case "very active":
        bmr *= 1.725;
        break;
      case "extra active":
        bmr *= 1.9;
        break;
    }

    return Math.round(bmr);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    height: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    goal: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    calorie_count: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    sex: {
      type: DataTypes.ENUM(["male", "female"]),
      allowNull: true,
    },
    activity_level: {
      type: DataTypes.ENUM(["sedentary", "lightly active", "moderately active", "very active", "extra active"]),
      allowNull: true,
    },
  },

  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
