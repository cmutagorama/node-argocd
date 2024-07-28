const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ statusCode: 200, message: "Messages fetched successfully" });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
