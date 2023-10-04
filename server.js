const express = require('express');
const app = express();
app.use(express.json());
require("dotenv").config()
const PORT = process.env.PORT;
// const client= require('./config/connectPg');
// client.connect()
//     .then(() => console.log('Connected to PostgreSQL'))
//     .catch(error => console.error('Error connecting to PostgreSQL', error));
// client.query('SELECT * FROM admin', (error, result) => {
//     if (error) {
//     console.error('Error executing query', error);
//     return;
//     }  
//     console.log('Query result:', result.rows);
// });
//  client.end()
//     .then(() => console.log('Disconnected from PostgreSQL'))
//     .catch(error => console.error('Error disconnecting from PostgreSQL', error));
const connectDB = require('./config/connectDB');
connectDB();
app.use("/api/admin",require("./routes/admin"));
app.listen(PORT,error =>{ 
    error? console.error(`failed to connect ${error}`) : console.log(`Connecting to port ${PORT}`) 
});