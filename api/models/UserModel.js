const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class UserModel extends Model {}

UserModel.init(
  {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    sequelize: connection,     
    tableName: 'Users',   
    timestamps: true
},
);


module.exports = UserModel;