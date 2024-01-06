const express = require ('express');
const app = express();
require ("dotenv").config();

const URL = process.env.MONGO_DB

Mongoose.connect(URL, {}
    ).then(()=> {
        console.log( "connected to DB")
    }).catch(err => {
        console.log(err)
    })

app.listen(5000, () => {
    console.log('listening on port 5000')
});