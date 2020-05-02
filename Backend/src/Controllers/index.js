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
    }


}