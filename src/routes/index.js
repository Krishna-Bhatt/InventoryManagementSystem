const { Router} =  require('express');
const router = Router();

const { getBooks,getBookById, createBook} = require('../services/bookService');
const {deleteBookInventory, updateStocks} = require('../services/inventoryService');

router.get('/books',getBooks);
router.get('/books/:id',getBookById);
router.post('/books',createBook);
router.delete('/books/:id',deleteBookInventory);
router.put('/inventory/:id',updateStocks)
module.exports = router;