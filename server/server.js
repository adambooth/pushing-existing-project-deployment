import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.info("Server is running in port 8080");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the server!" });
});
