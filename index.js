const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/chart', (req, res) => {
    const { date, time, location } = req.query;

    if (!date || !time || !location) {
        return res.status(400).json({ error: "Please provide date, time, and location as query params." });
    }

    const chart = {
        date,
        time,
        location,
        type: "Projector",
        authority: "Mental",
        profile: "4/6",
        definedCenters: ["Ajna", "Throat"],
        undefinedCenters: ["Sacral", "Solar Plexus"],
        gates: ["10", "20", "31", "7"]
    };

    res.json(chart);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
