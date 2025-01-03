const { DataTypes, Model } = require('sequelize');
const connection = require('../config/connection');

class ProductModel extends Model {
    static associate({ImgProductModel, OptionsModel, CategoryModel, Product_CategoryModel}){
        ProductModel.hasMany(ImgProductModel, {foreignKey: "product_id"});
        ProductModel.hasMany(OptionsModel, {foreignKey: "product_id"});
        ProductModel.belongsToMany(CategoryModel, {
            through: Product_CategoryModel,
            foreignKey: 'product_id',
            otherKey: 'category_id'
        });
    }
};

ProductModel.init(
  {
    enabled: {
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
    description: {
        type: DataTypes.STRING,
        defaultValue: ''
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