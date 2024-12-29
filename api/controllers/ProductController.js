const ProductModel = require('../models/ProductModel');

class ProductController {
    async findAll(req, res){
        let data = await ProductModel.findAll(//{
        //     attributes: [
        //         "firstname", 
        //         "surname", 
        //         "email"
        //     ]
        // }
    );
        return res.status(200).json(data);
    }

    async findById(req, res){

        let id = req.params.id;

        let product = await ProductModel.findByPk(id//, 
           // {attributes: ["firstname", "surname", "email"]}
        );

        return res.status(200).json(product);

    }

    async create(req, res){
        let body = req.body;
        await ProductModel.create(body);
        res.status(201).json({
            message: "Produto criado com sucesso!"
        });
    }

    async upate(req, res){
        const id = req.params.id;
        const body = req.body;

        await ProductModel.update(body, { where: {id} });

        return res.status(204).json();

    }

    async delete(req, res){
        const id = req.params.id;

        await ProductModel.destroy({ where: {id} });
        
        return res.status(204).json();
    }

}

module.exports = ProductController;