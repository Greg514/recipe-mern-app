import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import recipeRoutes from "./routes/recipes.js";

dotenv.config();


connectDB();

const app = express();


app.use(express.json());


app.use("/api/recipes", recipeRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
