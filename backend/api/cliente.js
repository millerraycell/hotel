module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError, validaCPF} = app.api.validation;

    const save = async (req,res) => {
        const cliente = {...req.body};

        if(req.params.id) cliente.id = req.params.id

        try{
            existsOrError(cliente.name, 'Nome não informado');
            existsOrError(cliente.email, 'Email não informado');
            existsOrError(cliente.cpf, 'CPF não informado');
            validaCPF(cliente.cpf, 'CPF Inválido')
            existsOrError(cliente.rg, 'RG não informado');
            existsOrError(cliente.telefone, 'Telefone não informado');
            existsOrError(cliente.dataAniversario, 'Data de Aniversário não informada');
            existsOrError(cliente.formaDePagamento, 'Forma de pagamento não informada')

            const clientedb = await app.db('clientes')
                .where({cpf : cliente.cpf}).first();

            if(!clientedb){
                notExistsOrError(clientedb, 'Funcionário já Cadastrado');
            } 
            
        } catch(msg){
            return res.status(400).send(msg)
        }

        if(cliente.id){
            app.db('clientes')
                .update(cliente)
                .where({ id : cliente.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            app.db('clientes')
                .insert(cliente)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    };

    const get = (req,res) => {
        app.db('clientes')
            .select('id', 'name', 'email', 'telefone')
            .then(clientes => res.json(clientes))
            .catch(err => res.status(500).send(err))
    };

    const deletar = (req, res) => {
        const clienteId = req.params;
        app.db('clientes')
            .where({id : clienteId})
            .del()
    };

    return {save, get, deletar}
};