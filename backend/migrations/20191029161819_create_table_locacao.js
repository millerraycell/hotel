
exports.up = function(knex) {
    return knex.schema.createTable('locacao', table => {
        table.integer('clienteId').references('id')
            .inTable('clientes'),
        table.integer('quartoId').references('numero')
            .inTable('quartos'),

        table.date('dataEntrada'),
        table.date('dataSaida'),

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_At').defaultTo(knex.fn.now());  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('locacao')
};
