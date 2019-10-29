module.exports = app => {
    const alocar = async (req,res) => {
        const {clienteCPF, tipo, dataEntrada, dataSaida} = req.body;

        const cliente = await app.db('clientes')
                        .select('id')
                        .where({cpf : clienteCPF})
                        .first()
                        .then((row) => row)

        const quarto = await app.db('quartos')
                        .select('numero')
                        .where({tipo: tipo,
                                locado: false})
                        .first()
                        .then((row) => row)

        const update = function(numero){
            app.db('quartos')
                .update({locado : true})
                .where({numero: numero})
        };

        app.db('locacao')
            .insert([{clienteId: cliente.id,
                    quartoId : quarto.numero,
                    dataEntrada: dataEntrada,
                    dataSaida:dataSaida}])
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err));

        update(quarto.numero);
    }
    return {alocar}
}