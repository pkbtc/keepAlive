import axios from "axios";

export default async function handler(req, res) {
  const BACKEND_URL = "https://nerist-resell-back.onrender.com/ping"; // Replace with your backend URL

  try {
    const response = await axios.get(BACKEND_URL);
    console.log(`[Success] Pinged backend: ${response.status}`);
    res.status(200).json({ message: "Backend pinged successfully!" });
  } catch (error) {
    console.error(`[Error] Failed to ping backend: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
}
