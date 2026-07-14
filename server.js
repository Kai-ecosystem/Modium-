const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({
        name: "Modium Backend",
        status: "Running"
    });
});

app.post("/search", async (req, res) => {
    const query = req.body.query;

    if (!query) {
        return res.status(400).json({
            error: "No search query provided"
        });
    }

    try {
        const response = await fetch("https://api.firecrawl.dev/v2/search", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.FIRECRAWL_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: query
            })
        });

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Search failed"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Modium server running on port ${PORT}`);
});
