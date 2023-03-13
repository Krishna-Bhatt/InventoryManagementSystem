const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_URL|| 'postgres://localhost/inventory_system',
    ssl: process.env.DB_URL ? true : false
})

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
        const inventoryRes = await pool.query(inventoryQuery); 
        await pool.query('COMMIT'); // commit the transaction
        res.status(200).json(bookRes.rowCount);
      } catch (err) {
        await pool.query('ROLLBACK'); // rollback the transaction if an error occurs
        console.error(err);
        res.send("Error: "+err);
      }
    
  }

const updateStocks = async (req,res) =>{
    
}
  module.exports = {
    deleteBookInventory
  }