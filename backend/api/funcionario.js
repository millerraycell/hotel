const bcrypt = require('bcrypt-nodejs');

module.exports = app => {
    const {existsOrError, notExistsOrError, equalsOrError, validaCPF} = app.api.validation;
    
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password,salt);
    }

    const save = async (req,res) => {
        const funcionario = {...req.body};

        if(req.params.id) funcionario.id = req.params.id

        try{
            existsOrError(funcionario.name, 'Nome não informado');
            existsOrError(funcionario.email, 'Email não informado');
            existsOrError(funcionario.cpf, 'CPF não informado');
            validaCPF(funcionario.cpf, 'CPF Inválido')
            existsOrError(funcionario.rg, 'RG não informado');
            existsOrError(funcionario.password, 'Senha não informada');
            existsOrError(funcionario.confirmPassword, 'Confirmação de senha inválida');
            equalsOrError(funcionario.confirmPassword, funcionario.password, 'Senhas informadas não são iguais' );
            existsOrError(funcionario.telefone, 'Telefone não informado');
            existsOrError(funcionario.dataAniversario, 'Data de Aniversário não informada');

            const funcionarioDB = await app.db('funcionarios')
                .where({cpf : funcionario.cpf}).first();

            if(!funcionarioDB){
                notExistsOrError(funcionarioDB, 'Funcionário já Cadastrado');
            } 
            
        } catch(msg){
            return res.status(400).send(msg)
        }

        funcionario.password = encryptPassword(req.body.password);
        delete funcionario.confirmPassword

        if(funcionario.id){
            app.db('funcionarios')
                .update(funcionario)
                .where({ id : funcionario.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }else{
            app.db('funcionarios')
                .insert(funcionario)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    };

    const get = (req,res) => {
        app.db('funcionarios')
            .select('id', 'name', 'email', 'gerente')
            .then(funcionarios => res.json(funcionarios))
            .catch(err => res.status(500).send(err))
    };

    const deletar = (req, res) => {
        const funcionarioId = req.params;
        app.db('funcionarios')
        .delete()
        .where({id : req.params.id})
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).send(err))
    };

    return {save, get, deletar}
};