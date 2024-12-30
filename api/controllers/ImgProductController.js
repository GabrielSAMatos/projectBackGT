const ImgProductModel = require('../models/ImgProductModel');
const check = require('../status/statusCheck.js');

class ImgProductController {
    async findAll(req, res){
        let data = await ImgProductModel.findAll();
        return res.status(200).json(data);
    }

    async findById(req, res){

        let id = req.params.id;

        let image = await ImgProductModel.findByPk(id);

        return check.status200(res, image);

    }

    async create(req, res){
        let body = req.body;
        await ImgProductModel.create(body);
        res.status(201).json({
            message: "Categoria criada com sucesso!"
        });
    }

    async update(req, res){
        const id = req.params.id;
        const body = req.body;
        let image = await ImgProductModel.findByPk(id);

        await ImgProductModel.update(body, { where: {id} });
        
        return check.status204(res, image);

    }

    async delete(req, res){
        const id = req.params.id;
        let image = await ImgProductModel.findByPk(id);

        await ImgProductModel.destroy({ where: {id} });
        
        return check.status204(res, image);
    }

}

module.exports = ImgProductController;