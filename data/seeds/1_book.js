/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('book').del()
    .then(function () {
      // Inserts seed entries
      return knex('book').insert([
        {id: 1, title: 'The Great Gatsby', author: 'F. Scott'},
        {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee'},
        {id: 3, title: '1984', author: 'George Orwell'},
        {id: 4, title: 'Pride and Prejudice', author: 'Jane Austen'},
        {id: 5, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez'},
      ]);
    });
};
