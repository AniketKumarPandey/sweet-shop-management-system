import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  res.send("Sweet Shop API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
