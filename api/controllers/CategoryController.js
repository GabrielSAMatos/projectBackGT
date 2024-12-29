const CategoryModel = require('../models/CategoryModel');

class CategoryController {
    async findAll(req, res){
        let data = await CategoryModel.findAll({
            attributes: ["name", "slug"]
        });
        return res.status(200).json(data);
    }

    async findById(req, res){

        let id = req.params.id;

        let category = await CategoryModel.findByPk(id, {attributes: ["name", "slug"]});

        return res.status(200).json(category);

    }

    async create(req, res){
        let body = req.body;
        await CategoryModel.create(body);
        res.status(201).json({
            message: "Categoria criada com sucesso!"
        });
    }

    async upate(req, res){
        const id = req.params.id;
        const body = req.body;

        await CategoryModel.update(body, { where: {id} });

        return res.status(200).json({
            message: "Categoria alterada com sucesso!"
        });

    }

    async delete(req, res){
        const id = req.params.id;

        await CategoryModel.destroy({ where: {id} });
        
        return res.status(200).json({
            message: "Categoria deletada com sucesso!"
        })
    }

}

module.exports = CategoryController;