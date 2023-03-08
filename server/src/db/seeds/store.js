/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('store').del()
    .then(function () {
      // Inserts seed entries
      return knex('store').insert([
        {id: 1, name: 'Barnes & Noble', location: 'New York'},
        {id: 2, name: 'Powell\'s Books', location: 'Portland'},
        {id: 3, name: 'The Strand', location: 'New York'},
        {id: 4, name: 'Tattered Cover', location: 'Denver'},
        {id: 5, name: 'BookPeople', location: 'Austin'},
      ]);
    });
};

