const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DB_URL|| 'postgres://localhost/inventory_system',
    ssl: process.env.DB_URL ? true : false
})

const getBooks = async (req,res)=>{
  try
  {
      const response = await pool.query('SELECT * FROM book');
      res.status(200).json(response.rows);
  }
  catch(error){
      console.log(error);
      res.send("Error: "+error);
  }
}

const getBookById = async (req,res) => {
  try{
    const response = await pool.query('SELECT * FROM book WHERE id = $1',[req.params.id]);
      res.status(200).json(response.rows);
  }
  catch(error){
    console.log(error);
    res.send("Error: "+error);
  }
}


const createBook = async (req,res) => {
  const {id,title,author} = req.body;
  try{
    const response = await pool.query('INSERT INTO book(id,title, author) VALUES($1,$2,$3)',[id,title,author]);
    res.status(200).json(response);
    
  }
  catch(error){
    console.log(error);
    res.send("Error: "+error);
  }
  
}



module.exports = {
  getBooks,
  getBookById,
  createBook
}