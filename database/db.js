const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(
            "<DATABASE URL FROM ENV FILE>"
        )
        console.log("DB Connected ");
        
    } catch (error) {
        process.exit(1);
        
    }
} 
module.exports = connectToDB;