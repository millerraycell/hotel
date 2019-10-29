module.exports = app => {
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/quartos')
        .get(app.api.quarto.get)

    app.route('/alocacao')
        .post(app.api.locacao.alocar)
        //.put(app.api.locacao.desalocar)

    app.route('/funcionarios')
        .post(app.api.funcionario.save)
        .get(app.api.funcionario.get)

    app.route('/funcionarios/:id')
        .put(app.api.funcionario.save)
        .delete(app.api.funcionario.deletar)

    app.route('/clientes')
        .post(app.api.cliente.save)
        .get(app.api.cliente.get)
    
    app.route('/clientes/:id')
        .put(app.api.cliente.save)
        .delete(app.api.cliente.deletar)
}