const UserModel = require('../models/UserModel');

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
    }

    async findById(req, res){

        let id = req.params.id;

        let user = await UserModel.findByPk(id, {attributes: [
            "id",
            "firstname", 
            "surname", 
            "email"
        ]});

        if(product == null){
            return res.status(404).json();
        }
        
        return res.status(200).json(user);

    }

    async create(req, res){
        let body = req.body;
        await UserModel.create(body);
        res.status(201).json({
            message: "Usuario criado com sucesso!"
        });
    }

    async upate(req, res){
        const id = req.params.id;
        const body = req.body;

        await UserModel.update(body, { where: {id} });

        return res.status(204).json();

    }

    async delete(req, res){
        const id = req.params.id;

        await UserModel.destroy({ where: {id} });

        return res.status(204).json();
    }

}

module.exports = UserController;