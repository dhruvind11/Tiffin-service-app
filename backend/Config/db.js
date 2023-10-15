const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://dhruvin:1234@cluster0.eznmdxt.mongodb.net/Tiffin-service?retryWrites=true&w=majority", );
        console.log(`Mongodb database connected sucessfully ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongodb database errors ${error}`)
    }
}

module.exports = connectDB;