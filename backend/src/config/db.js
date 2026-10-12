const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/cleanora';
  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000,
    });
    isConnected = true;
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    isConnected = false;
    console.warn(`[Database] MongoDB not available (${err.message}). Using high-performance in-memory fallback.`);
  }
};

const getDbStatus = () => ({
  connected: isConnected,
  mode: isConnected ? 'mongodb' : 'in-memory'
});

module.exports = { connectDB, getDbStatus };
