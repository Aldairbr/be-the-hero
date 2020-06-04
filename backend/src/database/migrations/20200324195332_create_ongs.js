
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // o parâmetro '2' é o  tamanho de caracteres que a coluna irá receber
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('ongs');
  };
  