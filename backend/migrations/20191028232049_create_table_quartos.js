exports.up = function(knex) {
    return knex.schema.createTable('quartos', table => {
        table.integer('numero').primary().notNull(),
        table.string('tipo').notNull(),
        table.float('preco',2).notNull(),
        table.boolean('locado').notNull().defaultTo(false),

        table.date('dataEntrada').notNull(),
        table.date('dataSaida').notNull(),

        table.integer('userId').references('id')
            .inTable('clientes'),

        table.timestamps();

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('quartos')
};