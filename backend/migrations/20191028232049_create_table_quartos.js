exports.up = function(knex) {
    return knex.schema.createTable('quartos', table => {
        table.integer('numero').primary().notNull(),
        table.string('tipo').notNull(),
        table.float('preco',2).notNull(),
        table.boolean('locado').notNull().defaultTo(false),

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_At').defaultTo(knex.fn.now());  

    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('quartos')
};