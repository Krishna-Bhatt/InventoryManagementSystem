
const express =  require('express');
const app = express();

//middlewares
app.use(express.json());

//routes
app.use(require('./routes/index'));

app.listen(process.env.PORT||8080);

console.log('Server on port 8080');