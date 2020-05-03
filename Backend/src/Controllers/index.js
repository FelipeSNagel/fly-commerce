const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;
        const [count] = await connection('stock').count();
        const all = await connection('stock')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['*']);

        response.header('X-Total-Count', count['count(*)']);
        return response.json(all);
    },

    async create(request, response) {
        const { name, type, _size, imageUrl } = request.body;

        /*Fazer a verificação se o usuario estar logado */
        //const id_user = request.headers.authorization;
        const id = crypto.randomBytes(5).toString('HEX');
        try {


            await connection('stock').insert({
                id,
                name,
                type,
                _size,
                imageUrl
            });
        } catch (error) {
            console.log(error)
        }
        return response.status(200).json(
            {
                "status": 200,
                "resp": "Dados adicionados com sucesso"
            }
        );


    },
    async delete(request, response) {
        const { id } = request.params;
        //verificar usuario
        //const user_id = request.headers.authorization;

        await connection('stock').where('id', id).delete();


        return response.status(204).send();
    },

    async products(request, response) {

        return response.status(200).json(
            {
                "id": "1",
                "name": "notebook",
                "value": 2300,
                "description": "Notebook ",
                "status": true

            },
            {
                "id": "2",
                "name": "smartphone",
                "value": 1000,
                "description": "Celular inteligente",
                "status": true

            },
            {
                "id": "3",
                "name": "smartphone 2",
                "value": 1500,
                "description": "Celular inteligente 2",
                "status": true

            }
        );
    },
    async sendDroneConfirm(request, response) {
        const Data = request.body;
       
        //verificar usuario
        //const user_id = request.headers.authorization;

        //Aqui terá verificação e escolha dos drones de automatizada pelo sistema

        return response.status(200).send(
            `Dados recebidos pelo drone:<br/>
            ${Data}<br/>
            Aguardando investimento para ter um drone e mandar o produto...
            `
        );
    },

}