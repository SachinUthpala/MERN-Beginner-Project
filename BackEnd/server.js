
import express from "express";

const app = express();
const PORT = 5001;



// Test route
app.get("/api/notes", (req, res) => {
    res.send("MERN Backend is running successfully!");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
