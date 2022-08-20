const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri,options);
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;