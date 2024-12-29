const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductModel extends Model {}

ProductModel.init(
  {
    enable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN(),
        defaultValue: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    decription: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price_with_discount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
  },
  {
    sequelize: connection,     
    tableName: 'products',   
    timestamps: true
},
);


module.exports = ProductModel;