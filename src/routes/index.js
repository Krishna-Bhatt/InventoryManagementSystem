const { Router} =  require('express');
const router = Router();

const { getBooks,getBookById, createBook} = require('../services/bookService');
const {deleteBookInventory} = require('../services/inventoryService');
router.get('/books',getBooks);
router.get('/books/:id',getBookById);
router.post('/books',createBook);
router.delete('/books/:id',deleteBookInventory);
module.exports = router;