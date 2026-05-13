const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // HARDCODE sementara — tanpa process.env
    const uri = 'mongodb://127.0.0.1:27017/space-survivor';
    
    console.log('Connecting to MongoDB at:', uri);
    
    const conn = await mongoose.connect(uri);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    console.error('Pastikan MongoDB sudah nyala di komputer ini!');
    process.exit(1);
  }
};

module.exports = connectDB;