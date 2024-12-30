const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');
const ProductModel = require('./ProductModel');
const CategoryModel = require('./CategoryModel');

class ProdCateg extends Model {}

ProdCateg.init(
  {  
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ProductModel,
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: CategoryModel,
          key: 'id'
        }
    }
  },
  {
    tableName: 'product_category',
    timestamps: false,
    sequelize: connection, 
  },
);

module.exports = ProdCateg;