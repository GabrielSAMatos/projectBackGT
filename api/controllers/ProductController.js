const ProductModel = require('../models/ProductModel');
const ImgProductModel = require('../models/ImgProductModel.js');
const OptionsModel = require('../models/OptionsModel.js');
const Product_CategoryModel = require('../models/Product_CategoryModel.js');
const CategoryModel = require('../models/CategoryModel.js');

const check = require('../status/statusCheck.js');

class ProductController {

    constructor(){
        ProductModel.associate({
            ImgProductModel, 
            OptionsModel,
            Product_CategoryModel,
            CategoryModel
        })
    }

    async findAll(req, res){
        const products = await ProductModel.findAll({
            attributes: [
                "id",
                "enabled",
                "name",
                "slug",
                "stock",
                "description", 
                "price",
                "price_with_discount"
            ],
            include: [
                {
                    model: CategoryModel,
                },{
                    model: ImgProductModel 
                },{
                    model: OptionsModel
                }
            ]
        });
        
        return res.status(200).json(products);
    }

    async findById(req, res){

        let id = req.params.id;

        let product = await ProductModel.findByPk(id, {
            attributes: [
                "id",
                "enabled",
                "name",
                "slug",
                "stock",
                "description", 
                "price",
                "price_with_discount"
            ]});
        
        return check.status200(res, product);

    }

    async create(req, res){

        const {category_ids, ...body} = req.body;

        let product = await ProductModel.create(body, {
            include: {
                through: Product_CategoryModel,
                model: CategoryModel,
                model: ImgProductModel,
                model: OptionsModel,

        }});

        product.setCategory_ids(category_ids)

        return res.status(201).json({
            message: "Produto criado com sucesso!"
        });
    };

    async update(req, res){
        const id = req.params.id;
        const body = req.body;
        let product = await ProductModel.findByPk(id);

        await ProductModel.update(body, { where: {id} });

        return check.status204(res, product);


    };

    async delete(req, res){
        const id = req.params.id;
        let product = await ProductModel.findByPk(id);

        await ProductModel.destroy({ where: {id} });
        
        return check.status204(res, product);

    };

};

module.exports = ProductController;