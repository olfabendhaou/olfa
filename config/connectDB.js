const mongoose = require('mongoose');

const connectDB = async() => {

    try { await mongoose.connect(process.env.DB_URI)
    
        console.log("Data base Connected successfully");
    }
    catch (error) {

        console.error("data base connection error");

}
}
module.exports = connectDB ;


// const client = new Client({
//     user: 'postgres',
//     host: 'localhost',  // e.g., 'localhost'
//     database: 'postgres',
//     password: 'rootUser',
//     port: 5432,  // PostgreSQL default port
// });

// // Connect to the PostgreSQL server

//     client.connect()
//     .then(() => {
//     console.log('Connected to PostgreSQL');
//     // Perform PostgreSQL operations here
//     client.query('SELECT * FROM your_table')
//         .then(result => {
//         console.log('Query result:', result.rows);
//         })
//         .catch(err => {
//         console.error('Error executing query:', err);
//         });
//     })
//     .catch(err => {
//     console.error('Error connecting to PostgreSQL:', err);
//     })
//     .finally(() => {
//     client.end()
//         .then(() => {
//         console.log('Connection to PostgreSQL closed');
//         })
//         .catch(err => {
//         console.error('Error closing PostgreSQL connection:', err);
//         });
//     });

// // .then(() => console.log('Connected to PostgreSQL'))
// // .catch(err => console.error('Error connecting to PostgreSQL', err));
// // module.exports = client;
// module.exports = connectpg()