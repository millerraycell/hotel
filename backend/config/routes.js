module.exports = app => {
    app.route('/funcionarios')
        .post(app.api.funcionario.save)
}