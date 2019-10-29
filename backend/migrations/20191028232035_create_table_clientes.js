exports.up = function(knex) {
    return knex.schema.createTable('clientes', table => {
      table.increments('id').notNull().primary(),
  
      table.string('name').notNull(),
      table.string('cpf').notNull(),
      table.string('rg').notNull(),
      table.string('telefone').notNull(),
      table.date('dataAniversario').notNull(),
      table.string('email').notNull(),
      table.string('formaDePagamento').notNull(),
  
      table.timestamps();  
    })
  };
  
  exports.down = function(knex) {
      knex.schema.dropTable('clientes')
    
  };