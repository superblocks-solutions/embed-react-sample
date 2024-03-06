const express = require("express");

const app = express();

const port = process.env.API_PORT || 3001;
const appPort = process.env.SERVER_PORT || 3000;
const appOrigin = `http://localhost:${appPort}`;

// Get a user token from Superblocks.
app.get("/api/superblocks/token", (req, res) => {
  res.json({
    'data': 'Hello world'
  })
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
