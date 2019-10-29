exports.up = function(knex) {
    return knex.schema.createTable('funcionarios', table => {
        table.increments('id').primary(),
        table.string('password').notNull(),
        table.boolean('gerente').notNull().defaultTo(false),
  
        table.string('name').notNull(),
        table.string('cpf').notNull().unique(),
        table.string('rg').notNull(),
        table.string('telefone').notNull(),
        table.date('dataAniversario').notNull(),
        table.string('email').unique().notNull(), 
  
        table.timestamps();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('funcionarios')
    
  };