const mongoose = require('mongoose')

const connectDB = (url) => {
    console.log('connected to db')
    return mongoose.connect(url, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}


module.exports = connectDB;
