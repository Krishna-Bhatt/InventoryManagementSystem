const {pool} = require('../services/config');

const deleteBookInventory = async (req,res) => {
    const id = req.params.id;
    try {
        await pool.query('BEGIN'); // start a transaction
    
        // delete the book from the "books" table
        const bookQuery = {
          text: 'DELETE FROM book WHERE id = $1',
          values: [id],
        };
        const bookRes = await pool.query(bookQuery);

        // delete the book's inventory from the "inventory" table
        const inventoryQuery = {
          text: 'DELETE FROM inventory WHERE book_id = $1',
          values: [id],
        };
        await pool.query(inventoryQuery); 
        await pool.query('COMMIT'); // commit the transaction
        res.status(200).json({"Updated rows":bookRes.rowCount});
      } catch (err) {
        await pool.query('ROLLBACK'); // rollback the transaction if an error occurs
        console.error(err);
        res.send("Error: "+err);
      }
    
  }

const updateStocks = async (req,res) =>{
    const id = req.params.id;
    const {quantity} = req.body;
    let time = new Date();
    let book_status = "out_of_stock";
    if(quantity>0){
      book_status = "in_stock";
    }
    try{
        const response = await pool.query('UPDATE inventory SET quantity = $1, book_status = $2, updated_at = $3 WHERE id = $4',[quantity,book_status,time,id]);
        res.status(200).json({"Updated rows ":response.rowCount});
    }
    catch(err){
        console.log(err);
        res.send("Error: "+err);
    }
}
  module.exports = {
    deleteBookInventory,
    updateStocks
  }