exports.up = function(knex) {
    return knex.schema.createTable('clientes', table => {
      table.increments('id').notNull().primary(),
  
      table.string('name').notNull(),
      table.string('cpf').notNull().unique(),
      table.string('rg').notNull(),
      table.string('telefone').notNull(),
      table.date('dataAniversario').notNull(),
      table.string('email').notNull(),
      table.string('formaDePagamento').notNull(),
  
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_At').defaultTo(knex.fn.now());  
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('clientes')
    
  };