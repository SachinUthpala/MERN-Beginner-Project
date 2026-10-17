
import express from "express";

const app = express();
const PORT = 5001;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("MERN Backend is running successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
