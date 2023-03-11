/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('book', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('author').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('store', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('location').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('inventory', function(table) {
      table.increments('id').primary();
      table.integer('book_id').unsigned().references('id').inTable('book').onDelete('CASCADE');
      table.integer('store_id').unsigned().references('id').inTable('store').onDelete('CASCADE');
      table.integer('quantity').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.unique(['book_id', 'store_id']);
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable('inventory')
    .dropTable('store')
    .dropTable('book');
};
