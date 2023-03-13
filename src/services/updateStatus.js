const {pool} = require('../services/config');
const CronJob = require('cron').CronJob;

async function checkStatus(inventory){
    const status = "out_of_stock";
    if(inventory.quantity == 0 && inventory.book_status == "in_stock"){
        const res = await pool.query('UPDATE inventory SET book_status = $1 WHERE id = $2',[status,inventory.id]);
    }

}
// Define a cron job that will run every minute
const updateStatus = new CronJob('0 * * * * *', async function() {

    try {
        console.log("Updating status every minute");
        const inventories = await pool.query("SELECT * from inventory");
        for(let inventory of inventories.rows){
            checkStatus(inventory);
        }
    } 
    catch (error) {
      console.error(error);
    }
  
  });
  
// Start the cron job
updateStatus.start();


