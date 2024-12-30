const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const ProductModel = require('./ProductModel');

class images extends Model {};

images.init(
  {  
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        }
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false
    }

  },
  {
    timestamps: false,
    sequelize: connection, 
  },
);

module.exports = images;