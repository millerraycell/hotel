module.exports = app => {
    
    const get = (req,res) => {
        app.db('quartos')
            .select('numero','locado')
            .then(quartos => res.json(quartos))
            .catch(err => res.status(500).send(err))
    };

    return {get}
}