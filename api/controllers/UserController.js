const UserModel = require('../models/UserModel');
const check = require('../status/statusCheck.js');

class UserController {
    async findAll(req, res){
        let data = await UserModel.findAll({
            attributes: [
                "id",
                "firstname", 
                "surname", 
                "email"
            ]});

        return res.status(200).json(data);
    };

    async findById(req, res){

        let id = req.params.id;

        let user = await UserModel.findByPk(id, {attributes: [
            "id",
            "firstname", 
            "surname", 
            "email"
        ]});

        return check.status200(res, user);

    };

    async create(req, res){
        let body = req.body;
        await UserModel.create(body);
        res.status(201).json({
            message: "Usuario criado com sucesso!"
        });
    };

    async update(req, res){
        const id = req.params.id;
        const body = req.body;
        let user = await UserModel.findByPk(id);

        await UserModel.update(body, { where: {id} });

        return check.status204(res, user);


    };

    async delete(req, res){
        const id = req.params.id;
        let user = await UserModel.findByPk(id);

        await UserModel.destroy({ where: {id} });

        return check.status204(res, user);

    };

}

module.exports = UserController;