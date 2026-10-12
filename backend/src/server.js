require('dotenv').config();
const app = require('./app');
const { connectDB } = require('./config/db');

const PORT = process.env.PORT || 5000;

// Initialize DB connection
connectDB();

const server = app.listen(PORT, () => {
  console.log(`[Cleanora API] Server listening on port ${PORT}`);
  console.log(`[Cleanora API] Health Check: http://localhost:${PORT}/api/v1/health`);
  console.log(`[Cleanora API] Products: http://localhost:${PORT}/api/v1/products`);
});

process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});
