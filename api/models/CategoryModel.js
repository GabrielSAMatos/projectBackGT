const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class category_ids extends Model {}

category_ids.init(
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
    tableName: 'category_ids',   
    timestamps: true
},
);


module.exports = category_ids;