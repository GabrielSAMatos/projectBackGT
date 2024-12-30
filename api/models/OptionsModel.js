const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const ProductModel = require('./ProductModel');

class options extends Model {};

options.init(
  {  
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM("square", "circle"),
        defaultValue: "square"
    },
    radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM("text", "color"),
        defaultValue: "text"
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false
    }

  },
  {
    sequelize: connection, 
    timestamps: false,
  },
);

module.exports = options;