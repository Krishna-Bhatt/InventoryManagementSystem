/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const db = require('../data');

module.exports = bookService = {
  getAll: async () => {
    const users = await db("book");
    return users;
  },
  getById: async (id) => {
    const user = await db("book").where("id", id);
    return user;
  },
  create: async (book) => {
    const users = await db("book").insert(book);
    return users;
  },
  update: async (id, book) => {
    const users = await db("book").where("id", id).update({
      id: book.id,
      title: book.title,
      author: book.author,
      updated_at: knex.fn.now(),
    });
    return users;
  },
  delete: async (id) => {
    const users = await db("book").where("id", id).del();
    return users;
  },
};