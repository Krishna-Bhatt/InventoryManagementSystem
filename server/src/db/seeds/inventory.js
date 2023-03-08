/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inventory').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventory').insert([
        {id: 1, book_id: 1, store_id: 1, quantity: 10},
        {id: 2, book_id: 1, store_id: 2, quantity: 5},
        {id: 3, book_id: 1, store_id: 3, quantity: 7},
        {id: 4, book_id: 2, store_id: 1, quantity: 8},
        {id: 5, book_id: 2, store_id: 2, quantity: 3},
        {id: 6, book_id: 3, store_id: 3, quantity: 4},
        {id: 7, book_id: 4, store_id: 4, quantity: 6},
        {id: 8, book_id: 4, store_id: 5, quantity: 2},
        {id: 9, book_id: 5, store_id: 2, quantity: 9},
        {id: 10, book_id: 5, store_id: 3, quantity: 11},
      ]);
    });
};
