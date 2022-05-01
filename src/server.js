import express from "express";

const PORT = 4000;

const app = express();

app.get("/", (req, res) => {
  return res.send("I Love You");
});

app.get("/login", (req, res) => {
  return res.send("Login here");
});

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);
});
