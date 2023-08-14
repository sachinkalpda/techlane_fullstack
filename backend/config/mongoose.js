const mongoose = require('mongoose');

// database connection url
mongoose.connect(process.env.DB_URL);


const db = mongoose.connection;

// if error in connection
db.on('error',console.error.bind(console,'Error in Connecting Database'));

// if connection is successfull
db.once('open',function(){
    console.log('Connected To Database');
});


module.exports = db;