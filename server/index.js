const express = require("express");
const path = require("path");
const getRoutes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../imageshop/build")));

app.use("/api", getRoutes());

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../imageshop/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
