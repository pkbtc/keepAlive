const axios = require("axios");

const BACKEND_URL = "https://nerist-resell-back.onrender.com/ping"; // Replace with your backend URL
const INTERVAL = 5 * 60 * 1000; // 5 minutes in milliseconds

const pingBackend = async () => {
  try {
    const response = await axios.get(BACKEND_URL);
    console.log(`[Success] Pinged backend: ${response.status}`);
  } catch (error) {
    console.error(`[Error] Failed to ping backend: ${error.message}`);
  }
};

// Start the keep-alive loop
setInterval(pingBackend, INTERVAL);
console.log(`Keep-alive script started. Pinging ${BACKEND_URL} every 5 minutes.`);
