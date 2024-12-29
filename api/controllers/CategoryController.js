const CategoryModel = require('../models/CategoryModel');
const check = require('../status/statusCheck.js');

class CategoryController {
    async findAll(req, res){
        let data = await CategoryModel.findAll({
            attributes: [
                "id",
                "name", 
                "slug",
                "use_in_menu"
            ]});
        return res.status(200).json(data);
    }

    async findById(req, res){

        let id = req.params.id;

        let category = await CategoryModel.findByPk(id, {
            attributes: [
                "id",
                "name", 
                "slug",
                "use_in_menu"
            ]});

        check.status200(res, category);

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
        
        //Para pegar o conteudo de dentro do ID e jogar na funcao para checar se ha algo ou nao
        let category = await CategoryModel.findByPk(id);
        check.status204(res, category);

    }

    async delete(req, res){
        const id = req.params.id;
        await CategoryModel.destroy({ where: {id} });
        
        //Para pegar o conteudo de dentro do ID e jogar na funcao para checar se ha algo ou nao
        let category = await CategoryModel.findByPk(id);
        check.status204(res, category);
    }

}

module.exports = CategoryController;