const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class CategoryModel extends Model {}

CategoryModel.init(
  {
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
    }
  },
  {
    sequelize: connection,     
    tableName: 'Category',   
    timestamps: true
},
);


module.exports = CategoryModel;