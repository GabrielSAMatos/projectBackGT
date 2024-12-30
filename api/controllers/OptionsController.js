const OptionsModel = require('../models/OptionsModel');
const check = require('../status/statusCheck.js');

class OptionsController {
    async findAll(req, res){
        let data = await OptionsModel.findAll();
        return res.status(200).json(data);
    }

    async findById(req, res){

        let id = req.params.id;

        let option = await OptionsModel.findByPk(id);

        return check.status200(res, option);

    }

    async create(req, res){
        let body = req.body;
        await OptionsModel.create(body);
        res.status(201).json({
            message: "Option criada com sucesso!"
        });
    }

    async update(req, res){
        const id = req.params.id;
        const body = req.body;
        let option = await OptionsModel.findByPk(id);

        await OptionsModel.update(body, { where: {id} });
        
        return check.status204(res, option);

    }

    async delete(req, res){
        const id = req.params.id;
        let option = await OptionsModel.findByPk(id);

        await OptionsModel.destroy({ where: {id} });
        
        return check.status204(res, option);
    }

}

module.exports = OptionsController;